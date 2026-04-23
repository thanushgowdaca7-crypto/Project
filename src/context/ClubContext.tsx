import React, { createContext, useContext, useState, useEffect } from 'react';
import { clubsData } from '../data/dummyData';
import type { Club } from '../data/dummyData';

interface ClubContextType {
  clubs: Club[];
  updateClub: (updatedClub: Club) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    // Load from localStorage if available, otherwise use initial dummyData
    const storedClubs = localStorage.getItem('vvce_clubsData');
    if (storedClubs) {
      try {
        setClubs(JSON.parse(storedClubs));
      } catch (e) {
        console.error("Failed to parse stored clubs", e);
        setClubs(clubsData);
      }
    } else {
      setClubs(clubsData);
    }
  }, []);

  const updateClub = (updatedClub: Club) => {
    setClubs(prevClubs => {
      const newClubs = prevClubs.map(c => c.id === updatedClub.id ? updatedClub : c);
      localStorage.setItem('vvce_clubsData', JSON.stringify(newClubs));
      return newClubs;
    });
  };

  return (
    <ClubContext.Provider value={{ clubs, updateClub }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClubs = () => {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error('useClubs must be used within a ClubProvider');
  }
  return context;
};
