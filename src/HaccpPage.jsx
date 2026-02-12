import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CheckCircle2, ClipboardCheck, AlertTriangle, Thermometer, FileCheck, Layers } from 'lucide-react';
import logo from './assets/logo.svg';

import { useLanguage } from './context/LanguageContext';

const HaccpPage = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Header */}
            <header className="bg-slate-900 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src={logo} alt="ChefCode" className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-slate-300 hover:text-orange-500 font-bold transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>{t('haccpPage.header.backToHome')}</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="w-24 h-24 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-orange-600 shadow-xl shadow-orange-500/20">
                        <ShieldCheck size={48} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
                        {t('haccpPage.hero.title')}<br />
                        <span className="text-orange-600">{t('haccpPage.hero.subtitle')}</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-2xl mx-auto">
                        {t('haccpPage.hero.desc')}
                    </p>

                    {/* Main Content - Premium Dark Tech Style */}
                    <div className="text-center bg-slate-950 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
                                {t('haccpPage.main.title')}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                                {t('haccpPage.main.desc')}
                            </p>

                            <div className="grid gap-6 max-w-4xl mx-auto">
                                {/* Planned Capabilities Header */}
                                <div className="flex items-center gap-3 mb-2 justify-center">
                                    <div className="h-px bg-slate-700 w-12 md:w-24"></div>
                                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{t('haccpPage.main.planned')}</span>
                                    <div className="h-px bg-slate-700 w-12 md:w-24"></div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    {/* Feature 1 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group flex flex-col items-center text-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                            <ClipboardCheck size={28} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg mb-2">{t('haccpPage.main.features.checks.title')}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t('haccpPage.main.features.checks.desc')}</p>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group flex flex-col items-center text-center gap-4">
                                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-orange-400 border border-slate-700 shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <AlertTriangle size={28} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg mb-2">{t('haccpPage.main.features.detection.title')}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t('haccpPage.main.features.detection.desc')}</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group flex flex-col items-center text-center gap-4">
                                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-orange-400 border border-slate-700 shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <Thermometer size={28} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg mb-2">{t('haccpPage.main.features.records.title')}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t('haccpPage.main.features.records.desc')}</p>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group flex flex-col items-center text-center gap-4">
                                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-orange-400 border border-slate-700 shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <FileCheck size={28} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg mb-2">{t('haccpPage.main.features.audit.title')}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t('haccpPage.main.features.audit.desc')}</p>
                                        </div>
                                    </div>

                                    {/* Feature 5 - Full Width */}
                                    <div className="md:col-span-2 bg-gradient-to-r from-orange-950/30 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all group flex flex-col items-center text-center gap-4">
                                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 border border-slate-700 shrink-0 group-hover:scale-110 transition-transform">
                                            <Layers size={32} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg mb-2">{t('haccpPage.main.features.integration.title')}</h5>
                                            <p className="text-slate-300 text-sm">{t('haccpPage.main.features.integration.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="relative z-10 text-slate-500 text-xs text-center border-t border-slate-800 pt-6 mt-8 max-w-2xl mx-auto">
                            {t('haccpPage.main.disclaimer')}
                        </p>
                    </div>

                    {/* Early Access */}
                    <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl shadow-xl relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl -mr-32 -mt-32 opacity-20"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">{t('haccpPage.earlyAccess.title')}</h3>
                        <p className="text-slate-300 mb-8 relative z-10 text-lg">{t('haccpPage.earlyAccess.desc')}</p>
                        <Link to="/#demo-signup" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 relative z-10">
                            {t('haccpPage.earlyAccess.button')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Minimal */}
            <footer className="bg-slate-900 py-10 mt-24 text-center text-slate-500 text-sm border-t border-slate-800">
                <p>{t('haccpPage.footer.copyright')}</p>
            </footer>
        </div>
    );
};

export default HaccpPage;
