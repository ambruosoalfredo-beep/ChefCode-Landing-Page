import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Lock, Eye, Trash2, Download } from 'lucide-react';
import logo from './assets/logo.svg';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-slate-900 sticky top-0 z-50">
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
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                        <Shield className="text-orange-400" size={24} />
                        <span className="font-bold text-sm uppercase tracking-wider">GDPR Compliant</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">Privacy Policy</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Your privacy matters to us. This policy explains how ChefCode collects, uses, and protects your personal data.
                    </p>
                    <p className="text-slate-500 text-sm mt-4">Last Updated: January 28, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">

                    {/* Quick Summary */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-3xl p-8 mb-12">
                        <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                            <Eye className="text-orange-600" size={28} />
                            Quick Summary
                        </h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>We only collect data you actively provide</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>We never sell personal data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>You can request data deletion at any time</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>All data is encrypted and stored on EU servers</span>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid gap-8">

                        {/* 1. Who We Are */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                                Who We Are
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>ChefCode is an AI-powered kitchen management platform designed to help restaurants optimize operations, reduce waste, and improve profitability.</p>
                                <p>We are committed to protecting personal data and complying with:</p>
                                <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                                    <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span className="font-medium text-slate-800">EU General Data Protection Regulation (GDPR)</span>
                                    </li>
                                    <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span className="font-medium text-slate-800">EU AI Act (where applicable)</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-5 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                                        <div>
                                            <span className="block font-bold text-slate-900 mb-1">Website Address</span>
                                            <a href="https://chef-code.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-600 transition-colors">
                                                https://chef-code.onrender.com/
                                            </a>
                                        </div>
                                        <div>
                                            <span className="block font-bold text-slate-900 mb-1">Contact Email</span>
                                            <a href="mailto:chefcodeproject@gmail.com" className="text-orange-600 font-bold hover:underline">chefcodeproject@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. What Data We Collect */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                                What Data We Collect
                            </h2>
                            <p className="text-slate-600 mb-6">We only collect personal data that you voluntarily provide through our website or platform.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
                                        Personal Data
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Full name', 'Email address', 'Restaurant name', 'Optional messages or inquiries'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-5 h-5 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 text-xs shadow-sm">✓</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-8 h-1 bg-slate-400 rounded-full"></div>
                                        Technical Data (Anonymized)
                                    </h3>
                                    <ul className="space-y-3">
                                        {['IP address (anonymized)', 'Browser type', 'Device information', 'Page visit timestamps'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-600">
                                                <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-xs shadow-sm">✓</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. Why We Collect Your Data */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                                Why We Collect Your Data
                            </h2>
                            <p className="text-slate-600 mb-6">Your data is processed strictly for the following purposes:</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                {['Responding to demo or contact requests', 'Communicating product updates or beta access', 'Improving platform performance and usability', 'Ensuring security and preventing misuse'].map((purpose, i) => (
                                    <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                                        <div className="w-1.5 h-full bg-orange-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-slate-700 font-medium">{purpose}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm italic border-t border-slate-100 pt-4">We do not use your data for automated decision-making that produces legal or significant effects.</p>
                        </div>

                        {/* 4. Legal Basis */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
                                Legal Basis for Processing
                            </h2>
                            <p className="text-slate-600 mb-4">We process personal data based on:</p>
                            <div className="flex flex-wrap gap-3">
                                {['Your explicit consent', 'Legitimate interest in operating and improving our services', 'Legal obligations under EU regulations'].map((item, i) => (
                                    <div key={i} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg font-medium border border-blue-100 text-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. Data Storage & Security */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">5</span>
                                Data Storage & Security
                            </h2>
                            <ul className="grid sm:grid-cols-3 gap-4">
                                <li className="bg-slate-900 text-white p-5 rounded-xl flex flex-col items-center text-center gap-3">
                                    <Shield className="text-emerald-400" />
                                    <span className="text-sm font-medium">Stored on secure EU servers</span>
                                </li>
                                <li className="bg-slate-900 text-white p-5 rounded-xl flex flex-col items-center text-center gap-3">
                                    <Lock className="text-orange-400" />
                                    <span className="text-sm font-medium">Encrypted at rest and in transit</span>
                                </li>
                                <li className="bg-slate-900 text-white p-5 rounded-xl flex flex-col items-center text-center gap-3">
                                    <Eye className="text-blue-400" />
                                    <span className="text-sm font-medium">Access limited to authorized personnel</span>
                                </li>
                            </ul>
                        </div>

                        {/* 6. Data Sharing */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">6</span>
                                Data Sharing
                            </h2>
                            <p className="text-lg text-slate-800 mb-6">We do <strong className="text-orange-600">not sell or rent</strong> your personal data to third parties.</p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <p className="text-slate-700 font-medium mb-4">We only share data with:</p>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm h-fit border border-slate-100"><Shield size={18} className="text-slate-400" /></div>
                                        <div>
                                            <strong className="block text-slate-900 text-sm">Service providers</strong>
                                            <span className="text-slate-600 text-sm">Trusted partners who help us operate our website (e.g., Web3Forms for contact forms)</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm h-fit border border-slate-100"><Lock size={18} className="text-slate-400" /></div>
                                        <div>
                                            <strong className="block text-slate-900 text-sm">Legal authorities</strong>
                                            <span className="text-slate-600 text-sm">When required by law or to protect our legal rights</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7. Your Rights */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">7</span>
                                Your Rights
                            </h2>
                            <p className="text-slate-600 mb-6">Under GDPR, you have the right to:</p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {['Access your personal data', 'Request correction or deletion', 'Withdraw consent at any time', 'Request data portability'].map((right, i) => (
                                    <div key={i} className="bg-white border-2 border-slate-100 hover:border-orange-200 p-4 rounded-xl text-center text-slate-700 font-medium text-sm flex items-center justify-center h-full transition-colors">
                                        {right}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-2 text-slate-600 bg-slate-50 p-4 rounded-xl">
                                <span>Requests can be sent to</span>
                                <a href="mailto:chefcodeproject@gmail.com" className="text-orange-600 font-bold hover:underline">chefcodeproject@gmail.com</a>
                            </div>
                        </div>

                        {/* 8. AI & Data Use */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex flex-col md:flex-row items-center text-center md:text-left gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">8</span>
                                AI & Data Use
                            </h2>
                            <p className="text-slate-600 mb-4">ChefCode uses AI to support operational insights, automation, and compliance.</p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                                <p className="text-orange-900 font-medium">We do not use personal data to train AI models without explicit consent.</p>
                            </div>
                            <div className="bg-slate-900 text-slate-300 rounded-xl p-6">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Eye size={18} className="text-emerald-400" /> All AI features are designed to align with:</h4>
                                <ul className="grid sm:grid-cols-3 gap-4 text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                        Data minimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                        Transparency
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                        EU AI Act compliance
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 9. Policy Updates */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">9</span>
                                Policy Updates
                            </h2>
                            <p className="text-slate-600">This Privacy Policy may be updated periodically. Any significant changes will be communicated clearly on this page.
                            </p>
                        </div>

                    </div>

                    {/* Back to Home CTA */}
                    <div className="text-center mt-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <ArrowLeft size={20} />
                            Back to ChefCode Home
                        </Link>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-900 py-10 text-sm text-slate-500">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <p>© 2025 ChefCode. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
