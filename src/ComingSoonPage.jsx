import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBasket, Handshake, ArrowRight, CheckCircle2, Database } from 'lucide-react';
import logo from './assets/logo.svg';

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500/30">
            {/* Navbar - Dark for consistency with brand identity */}
            <nav className="fixed top-0 w-full px-6 md:px-8 flex justify-between items-center z-50 bg-slate-900 shadow-lg py-4 lg:py-6">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-slate-800 p-2 rounded-xl group-hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-500">
                        <ArrowLeft size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                </Link>
                {/* Bigger Logo - Home Link */}
                <Link to="/" className="flex items-center justify-center group cursor-pointer">
                    <img src={logo} alt="ChefCode" className="h-16 lg:h-24 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>
                <div className="w-10"></div> {/* Spacer for center alignment effect */}
            </nav>

            <div className="container mx-auto px-4 pt-32 lg:pt-48 pb-24">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
                        The Kitchen, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Reimagined</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
                        ChefCode is building a connected ecosystem that transforms how restaurants operate, collaborate, and grow. What you see today is just the beginning.
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
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">Supplier Marketplace</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            <strong className="text-slate-900 block mb-2">A direct bridge between restaurants and suppliers.</strong>
                            ChefCode Marketplace helps restaurants buy together, reduce costs, and eliminate waste. Powered by AI-driven demand aggregation and certified suppliers. Smarter procurement, better margins, zero complexity. Order ingredients in real time, sync prices automatically, and keep inventory aligned without manual work. ChefCode turns purchasing into a smart, connected workflow.
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                <span>Real-time price synchronization</span>
                            </li>
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                <span>AI-driven demand aggregation & cost reduction</span>
                            </li>
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                <span>Inventory-linked purchasing</span>
                            </li>
                        </ul>
                    </div>



                    {/* Blockchain Integrity Section - Light Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center h-full group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mb-8 border border-orange-100 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                            <Database size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900 relative z-10">Blockchain Integrity</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow relative z-10">
                            <strong className="text-slate-900 block mb-2">Trust built into every ingredient.</strong>
                            We’re adding a blockchain-based Integrity Layer to strengthen trust across the ChefCode ecosystem—restaurants and suppliers. It will make certifications and lot-level traceability verifiable end-to-end, supporting a more transparent, compliant supply chain. Supplier visibility stays aggregated and anonymized, so trust scales without exposing restaurant-level data.
                        </p>

                        <ul className="space-y-3 mt-auto relative z-10">
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                <span>Verified ingredient provenance</span>
                            </li>
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                <span>Tamper-proof records</span>
                            </li>
                            <li className="flex items-center justify-center gap-3 text-slate-700 font-bold">
                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                <span>End-to-end supply transparency</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center max-w-xl mx-auto">
                    <div className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-black mb-4 text-white relative z-10">Ready to join the evolution?</h3>
                        <p className="text-slate-400 mb-8 relative z-10">Be among the first to access upcoming ChefCode features.</p>
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
