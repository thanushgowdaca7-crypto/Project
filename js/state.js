// Application State Management
window.State = {
  user: null,
  language: 'en',
  clubs: [],
  listeners: [],

  // Add listener for state changes
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  },

  // Notify listeners
  notify() {
    this.listeners.forEach(callback => callback(this));
  },

  async init() {
    // 1. Init Auth
    const studentSession = sessionStorage.getItem('vvce_auth_student');
    const persistentSession = localStorage.getItem('vvce_auth_user');
    if (studentSession) {
      this.user = JSON.parse(studentSession);
    } else if (persistentSession) {
      this.user = JSON.parse(persistentSession);
    }

    // 2. Fetch Data from Supabase
    try {
      if (window.supabaseClient) {
        const [{ data: fData }, { data: cData }] = await Promise.all([
          window.supabaseClient.from('faculty').select('*'),
          window.supabaseClient.from('clubs').select('*')
        ]);
        
        if (fData && fData.length > 0) window.facultyData = fData;
        if (cData && cData.length > 0) {
          let mergedClubs = cData;
          if (window.clubsData && window.clubsData.length > 0) {
            const newMergedClubs = [];
            // First, add all clubs from local data in their local order, merging with DB if they exist
            window.clubsData.forEach(localClub => {
              const dbClub = cData.find(mc => mc.id === localClub.id);
              if (dbClub) {
                newMergedClubs.push({ ...dbClub, ...localClub });
              } else {
                newMergedClubs.push(localClub);
              }
            });
            // Then, append any clubs from DB that aren't in local code
            cData.forEach(dbClub => {
              if (!newMergedClubs.find(mc => mc.id === dbClub.id)) {
                newMergedClubs.push(dbClub);
              }
            });
            mergedClubs = newMergedClubs;
          }
          this.clubs = mergedClubs;
          window.clubsData = mergedClubs; // Sync for global use
        }
      } else {
        this.clubs = window.clubsData || [];
      }
    } catch (error) {
      console.error("Error fetching from Supabase:", error);
      this.clubs = window.clubsData || [];
    }

    // 3. Init Language
    const storedLang = localStorage.getItem('vvce_language');
    if (storedLang) {
      this.language = storedLang;
    }

    this.notify();
    this.setupGeofence();
  },

  // Auth Methods
  login(id) {
    const upperId = id.toUpperCase();
    let loggedInUser = null;
    
    const matchedFaculty = window.facultyData?.find(f => f.id.toUpperCase() === upperId);

    if (upperId.startsWith('4VV')) {
      loggedInUser = { id: upperId, role: 'STUDENT', name: 'Student Prototype' };
      sessionStorage.setItem('vvce_auth_student', JSON.stringify(loggedInUser));
    } else if (matchedFaculty) {
      loggedInUser = { id: matchedFaculty.id, role: 'FACULTY', name: matchedFaculty.name };
      localStorage.setItem('vvce_auth_user', JSON.stringify(loggedInUser));
    } else if (upperId.startsWith('FAC')) {
      loggedInUser = { id: upperId, role: 'FACULTY', name: 'Faculty Prototype' };
      localStorage.setItem('vvce_auth_user', JSON.stringify(loggedInUser));
    } else if (upperId === 'ADMIN') {
      loggedInUser = { id: upperId, role: 'ADMIN', name: 'System Admin' };
      localStorage.setItem('vvce_auth_user', JSON.stringify(loggedInUser));
    } else {
      return false;
    }

    this.user = loggedInUser;
    
    // Start tracking if faculty
    if (loggedInUser && loggedInUser.role === 'FACULTY') {
      this.startFacultyTracking(loggedInUser.id);
    }

    this.notify();
    return true;
  },

  startFacultyTracking(facultyId) {
    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported by this browser.");
      return;
    }
    
    console.log("Requesting location permission for faculty tracking...");
    // This will prompt the user immediately
    this.facultyWatchId = navigator.geolocation.watchPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Faculty location updated: ${latitude}, ${longitude}`);
        
        if (window.supabaseClient) {
          // Since we are using mock login IDs (FAC123), we'll just update a specific prototype faculty 
          // or all faculty that match some criteria for demo purposes.
          // To be safe and visible, let's update a specific one like 'cs1' or based on the ID.
          // For demo: we'll just update the record where id = 'cs1'
          const targetFacultyId = 'cs1'; // Hardcoded for demo purposes

          const { error } = await window.supabaseClient
            .from('faculty')
            .update({ 
              latitude: latitude, 
              longitude: longitude, 
              last_updated: new Date().toISOString(),
              is_tracking: true
            })
            .eq('id', targetFacultyId);
            
          if (error) console.error("Error updating location in Supabase:", error);
        }
      },
      (error) => {
        console.warn('Faculty location tracking denied or failed:', error);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );
  },

  logout() {
    this.user = null;
    sessionStorage.removeItem('vvce_auth_student');
    localStorage.removeItem('vvce_auth_user');
    
    // Stop tracking if it was running
    if (this.facultyWatchId !== undefined) {
      navigator.geolocation.clearWatch(this.facultyWatchId);
      this.facultyWatchId = undefined;
      // Ideally, we'd also set is_tracking = false in the database here
      if (window.supabaseClient) {
          window.supabaseClient
            .from('faculty')
            .update({ is_tracking: false })
            .eq('id', 'cs1') // Using the hardcoded demo ID
            .then(({ error }) => {
                if (error) console.error("Error setting is_tracking false:", error);
            });
      }
    }

    this.notify();
  },

  // Language Methods
  setLanguage(lang) {
    this.language = lang;
    localStorage.setItem('vvce_language', lang);
    this.notify();
  },

  t(key) {
    if (window.translations[key] && window.translations[key][this.language]) {
      return window.translations[key][this.language];
    }
    return window.translations[key]?.en || key;
  },

  // Club Methods
  updateClub(updatedClub) {
    this.clubs = this.clubs.map(c => c.id === updatedClub.id ? updatedClub : c);
    localStorage.setItem('vvce_clubsData', JSON.stringify(this.clubs));
    this.notify();
  },

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  // Geofence Logic
  setupGeofence() {
    const CAMPUS_LAT = 12.3361;
    const CAMPUS_LNG = 76.6186;
    const MAX_RADIUS_KM = 0.5;

    if (this.user?.role === 'STUDENT' && navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const distance = this.calculateDistance(latitude, longitude, CAMPUS_LAT, CAMPUS_LNG);
          if (distance > MAX_RADIUS_KM) {
            console.log('Student left campus. Auto-logout.');
            alert('Security Notice: You have crossed the campus geofence. Logged out.');
            this.logout();
            window.location.hash = '#login';
          }
        },
        (error) => console.warn('Geolocation error:', error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }
  }
};
