import { createContext, useState, useContext } from "react";

// Create Context
const LanguageContext = createContext();

// Translations
const translations = {
  am: {
    home: "ቀዳሚ ገጽ",
    about: "ስለ እኛ",
    service: "አገልግሎቶቻችን",
    contact: "አግኙን",
    register: "ይመዝገቡ",
    language: "ቋንቋ",
  },
  en: {
    home: "Home",
    about: "About Us",
    service: "Service",
    contact: "Contact",
    register: "Register",
    language: "Language",
  },
};

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("am");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
