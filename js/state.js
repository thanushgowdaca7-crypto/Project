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

  init() {
    // 1. Init Auth
    const studentSession = sessionStorage.getItem('vvce_auth_student');
    const persistentSession = localStorage.getItem('vvce_auth_user');
    if (studentSession) {
      this.user = JSON.parse(studentSession);
    } else if (persistentSession) {
      this.user = JSON.parse(persistentSession);
    }

    // 2. Init Clubs
    const storedClubs = localStorage.getItem('vvce_clubsData');
    if (storedClubs) {
      try {
        this.clubs = JSON.parse(storedClubs);
      } catch (e) {
        this.clubs = window.clubsData;
      }
    } else {
      this.clubs = window.clubsData;
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
    
    if (upperId.startsWith('4VV')) {
      loggedInUser = { id: upperId, role: 'STUDENT', name: 'Student Prototype' };
      sessionStorage.setItem('vvce_auth_student', JSON.stringify(loggedInUser));
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
    this.notify();
    return true;
  },

  logout() {
    this.user = null;
    sessionStorage.removeItem('vvce_auth_student');
    localStorage.removeItem('vvce_auth_user');
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
