import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBasket, Handshake, ArrowRight, CheckCircle2, Database } from 'lucide-react';
import logo from './assets/logo.svg';

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500/30">
            {/* Navbar - Dark for consistency with brand identity */}
            <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-slate-800 p-2 rounded-xl group-hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-500">
                        <ArrowLeft size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                </Link>
                {/* Bigger Logo */}
                <img src={logo} alt="ChefCode" className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105" />
                <div className="w-10"></div> {/* Spacer for center alignment effect */}
            </nav>

            <div className="container mx-auto px-4 pt-48 pb-24">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
                        The Kitchen <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Evolved</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
                        We are building a connected ecosystem to empower your culinary vision. Here is a glimpse of what is coming next to ChefCode.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">

                    {/* Marketplace Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <ShoppingBasket size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">Supplier Marketplace</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            A unified platform to connect directly with your suppliers. Order instantly, track deliveries, and sync invoices automatically with your inventory.
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                <span>Real-time price syncing</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                <span>Automated restocking</span>
                            </li>
                        </ul>
                    </div>

                    {/* Partner Integration Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mb-8 border border-emerald-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <Handshake size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">Partner Integration</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            Collaboration is in our DNA. Just as we partner with scientific leaders like <strong className="text-slate-900 font-black">Food & Diet Goal</strong> and culinary experts like <strong className="text-slate-900 font-black">Chef Teodori</strong>, we are integrating with top-tier technology providers to create a seamless kitchen operating system.
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                                <span>Seamless POS & ERP connection</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                                <span>Unified data ecosystem</span>
                            </li>
                        </ul>
                    </div>

                    {/* Blockchain Integrity Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mb-8 border border-orange-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <Database size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">Blockchain Integrity</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            Immutable traceability for every ingredient. Verify provenance and quality across your supply chain, building total trust with your guests.
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                <span>Verified provenance</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                <span>Tamper-proof history</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center max-w-xl mx-auto">
                    <div className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-black mb-4 text-white relative z-10">Ready to join the revolution?</h3>
                        <p className="text-slate-400 mb-8 relative z-10">Secure your spot in our beta program.</p>
                        <a href="/#demo-signup" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/50 hover:scale-[1.02] relative z-10 text-lg">
                            Join Information List <ArrowRight size={24} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComingSoonPage;
