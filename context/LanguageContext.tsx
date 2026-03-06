"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Language, resolvePath } from '@/utils/i18n';

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string) => any; // Use any to allow returning objects or strings
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && ['en', 'ja'].includes(savedLang)) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (path: string) => {
        const value = resolvePath(dictionary[language], path);
        // Fallback to English if not found in current language (though we maintain both)
        if (!value) {
            console.warn(`Translation key not found: ${path}`);
            return resolvePath(dictionary['en'], path) || path;
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
