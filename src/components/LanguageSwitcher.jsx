import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = ({ mobile }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={`relative inline-flex items-center cursor-pointer transition-all duration-300 focus:outline-none ${mobile ? 'ml-0 mt-4' : 'ml-4'}`}
            aria-label="Toggle Language"
        >
            <div className={`w-20 h-9 rounded-full transition-colors duration-300 border border-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] ${language === 'it' ? 'bg-slate-800' : 'bg-slate-800'}`}>
                {/* Toggle Circle */}
                <div
                    className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center text-[10px] font-black border border-slate-200 text-slate-800 ${language === 'it' ? 'translate-x-11 bg-white' : 'translate-x-0 bg-white'}`}
                >
                    {language === 'it' ? 'ITA' : 'ENG'}
                </div>
                {/* Labels inside the track - Positioned to be visible when NOT selected */}
                <span className={`absolute left-2.5 top-2.5 text-[11px] font-black tracking-wider ${language === 'it' ? 'text-white' : 'text-slate-600 opacity-0'} transition-all duration-300`}>ENG</span>
                <span className={`absolute right-2.5 top-2.5 text-[11px] font-black tracking-wider ${language === 'it' ? 'text-slate-600 opacity-0' : 'text-white'} transition-all duration-300`}>ITA</span>
            </div>
        </button>
    );
};

export default LanguageSwitcher;
