import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBasket, Handshake, ArrowRight, CheckCircle2, Database } from 'lucide-react';
import logo from './assets/logo.svg';

import { useLanguage } from './context/LanguageContext';

const ComingSoonPage = () => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500/30">
            {/* Navbar - Dark for consistency with brand identity */}
            {/* Navbar - Fixed and Consistent with LandingPage behavior */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-8 flex justify-between items-center ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-slate-900 py-4 lg:py-6'}`}>
                {/* Logo - Left aligned, resizes on scroll */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <img src={logo} alt="ChefCode" className={`w-auto object-contain transition-transform group-hover:scale-105 ${scrolled ? 'h-12' : 'h-16 lg:h-24'}`} />
                </Link>

                {/* Back Button - Right aligned - HaccpPage Style */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-slate-300 hover:text-orange-500 font-bold transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>{t('navbar.backToHome')}</span>
                </Link>
            </nav>

            <div className="container mx-auto px-4 pt-32 lg:pt-48 pb-24">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
                        {t('comingSoon.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">{t('comingSoon.hero.highlight')}</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
                        {t('comingSoon.hero.desc')}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">

                    {/* Marketplace Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <ShoppingBasket size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">{t('comingSoon.marketplace.title')}</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            <strong className="text-slate-900 block mb-2">{t('comingSoon.marketplace.desc').split('. ')[0]}.</strong>
                            {t('comingSoon.marketplace.desc').split('. ').slice(1).join('. ')}
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            {t('comingSoon.marketplace.items').map((item, index) => (
                                <li key={index} className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                    <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Blockchain Integrity Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mb-8 border border-orange-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <Database size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">{t('comingSoon.blockchain.title')}</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            <strong className="text-slate-900 block mb-2">{t('comingSoon.blockchain.desc').split('. ')[0]}.</strong>
                            {t('comingSoon.blockchain.desc').split('. ').slice(1).join('. ')}
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            {t('comingSoon.blockchain.items').map((item, index) => (
                                <li key={index} className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                    <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center max-w-xl mx-auto">
                    <div className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-black mb-4 text-white relative z-10">{t('comingSoon.cta.title')}</h3>
                        <p className="text-slate-400 mb-8 relative z-10">{t('comingSoon.cta.desc')}</p>
                        <a href="/#demo-signup" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/50 hover:scale-[1.02] relative z-10 text-lg">
                            {t('comingSoon.cta.button')} <ArrowRight size={24} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComingSoonPage;
