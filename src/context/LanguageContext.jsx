import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'it' : 'en'));
    };

    const t = (key) => {
        // Split key by dots to access nested objects
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to English if key not found in current language
                let fallbackValue = translations['en'];
                for (const fallbackK of keys) {
                    if (fallbackValue && fallbackValue[fallbackK]) {
                        fallbackValue = fallbackValue[fallbackK];
                    } else {
                        return key; // Return key if not found
                    }
                }
                return fallbackValue || key;
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
