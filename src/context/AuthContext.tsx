import React, { createContext, useContext, useState, useEffect } from 'react';

// VVCE Campus rough coordinates (Mysuru)
const CAMPUS_LAT = 12.3361;
const CAMPUS_LNG = 76.6186;
const MAX_RADIUS_KM = 0.5; // 500 meters geofence radius

export type Role = 'STUDENT' | 'FACULTY' | 'ADMIN' | 'GUEST';

interface User {
  id: string; // The ID used to login
  role: Role;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (id: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Initialize from storage on mount
  useEffect(() => {
    const studentSession = sessionStorage.getItem('vvce_auth_student');
    const persistentSession = localStorage.getItem('vvce_auth_user');

    if (studentSession) {
      setUser(JSON.parse(studentSession));
    } else if (persistentSession) {
      setUser(JSON.parse(persistentSession));
    }
  }, []);

  // Haversine formula to calculate distance between two coordinates in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Geofencing Auto-Logout Hook
  useEffect(() => {
    let watchId: number;

    if (user?.role === 'STUDENT' && navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const distance = calculateDistance(latitude, longitude, CAMPUS_LAT, CAMPUS_LNG);
          
          // If student is further than 500 meters from campus
          if (distance > MAX_RADIUS_KM) {
            console.log('Student has left campus bounds. Triggering auto-logout...');
            alert('Security Notice: You have crossed the campus geofence. You have been securely logged out.');
            logout();
          }
        },
        (error) => {
          console.warn('Geolocation error:', error);
          // If they block location, you could technically force a logout for strict security
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [user]);

  const login = (id: string): boolean => {
    const upperId = id.toUpperCase();
    let loggedInUser: User | null = null;
    
    // Mock Authentication Logic based on "ID only" rule
    if (upperId.startsWith('4VV')) {
      loggedInUser = { id: upperId, role: 'STUDENT', name: 'Student Prototype' };
      // Save students to sessionStorage so it auto logouts on tab close
      sessionStorage.setItem('vvce_auth_student', JSON.stringify(loggedInUser));
    } else if (upperId.startsWith('FAC')) {
      loggedInUser = { id: upperId, role: 'FACULTY', name: 'Faculty Prototype' };
      // Save faculty long term
      localStorage.setItem('vvce_auth_user', JSON.stringify(loggedInUser));
    } else if (upperId === 'ADMIN') {
      loggedInUser = { id: upperId, role: 'ADMIN', name: 'System Admin' };
      localStorage.setItem('vvce_auth_user', JSON.stringify(loggedInUser));
    } else {
      // Invalid ID
      return false;
    }

    setUser(loggedInUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('vvce_auth_student');
    localStorage.removeItem('vvce_auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
