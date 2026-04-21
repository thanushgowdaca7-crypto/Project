import React, { createContext, useContext, useState } from 'react';

export type LanguageCode = 'en' | 'hi' | 'kn';

interface Dictionary {
  [key: string]: {
    en: string;
    hi: string;
    kn: string;
  };
}

// Global dictionary mapping common phrases to all languages
export const translations: Dictionary = {
  nav_home: { en: 'Home', hi: 'होम', kn: 'ಮುಖಪುಟ' },
  nav_directory: { en: 'Directory', hi: 'निर्देशिका', kn: 'ನಿರ್ದೇಶಿಕೆ' },
  nav_departments: { en: 'Departments', hi: 'विभाग', kn: 'ವಿಭಾಗಗಳು' },
  nav_campus_map: { en: 'Campus Map', hi: 'परिसर का नक्शा', kn: 'ಕ್ಯಾಂಪಸ್ ನಕ್ಷೆ' },
  nav_events: { en: 'Events & Fest', hi: 'कार्यक्रम और उत्सव', kn: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
  nav_lost_found: { en: 'Lost & Found', hi: 'खोया और पाया', kn: 'ಕಳೆದುಹೋದ ಮತ್ತು ಸಿಕ್ಕಿದ' },
  btn_search_faculty: { en: 'Search Faculty Cabin', hi: 'संकाय केबिन खोजें', kn: 'ಶಿಕ್ಷಕರ ಕ್ಯಾಬಿನ್ ಹುಡುಕಿ' },
  heading_directory: { en: 'Faculty Directory', hi: 'संकाय निर्देशिका', kn: 'ಶಿಕ್ಷಕರ ನಿರ್ದೇಶಿಕೆ' },
  placeholder_search: { en: 'Search by name or department...', hi: 'नाम या विभाग से खोजें...', kn: 'ಹೆಸರು ಅಥವಾ ವಿಭಾಗದಿಂದ ಹುಡುಕಿ...' }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  // Translation helper function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // Fallback to English or the key itself if mapping doesn't exist
    return translations[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
