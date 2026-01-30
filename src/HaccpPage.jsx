import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import logo from './assets/logo.svg';

const HaccpPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Header */}
            <header className="bg-slate-900 sticky top-0 z-50">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="ChefCode" className="h-16 w-auto" />
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-slate-300 hover:text-orange-500 font-bold transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600 shadow-xl">
                        <ShieldCheck size={48} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
                        HACCP 2.0 <br />
                        <span className="text-emerald-600">Coming Soon</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-12">
                        We are building the most advanced AI-assisted food safety system.
                        Automated logging, blockchain integrity, and effortless compliance are just around the corner.
                    </p>

                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Want early access?</h3>
                        <p className="text-slate-500 mb-6">Join our waitlist to be notifed when the full HACCP module launches.</p>
                        <Link to="/#demo-signup" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30">
                            Join Beta List
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Minimal */}
            <footer className="bg-slate-900 py-10 mt-24 text-center text-slate-500 text-sm">
                <p>&copy; 2025 ChefCode. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HaccpPage;
