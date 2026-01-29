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

            {/* Hero */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                        <Shield className="text-orange-400" size={24} />
                        <span className="font-bold text-sm uppercase tracking-wider">GDPR Compliant</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">Privacy Policy</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Your privacy matters to us. Here's how ChefCode protects and handles your personal data.
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
                                <span>We only collect data you provide (name, email, restaurant name) for demo requests</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>We never sell your data to third parties</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>You can request deletion of your data at any time</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold">•</span>
                                <span>All data is encrypted and stored securely in EU servers</span>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">1. Who We Are</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                ChefCode is an AI-powered kitchen management platform designed to help restaurants optimize operations, reduce waste, and improve profitability. We are committed to protecting your privacy and complying with the EU General Data Protection Regulation (GDPR) and the EU AI Act.
                            </p>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <p className="text-sm text-slate-700">
                                    <strong className="text-slate-900">Data Controller:</strong> ChefCode S.r.l.<br />
                                    <strong className="text-slate-900">Registered Address:</strong> [Your Address]<br />
                                    <strong className="text-slate-900">Contact Email:</strong> privacy@chefcode.com
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">2. What Data We Collect</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We only collect personal data that you voluntarily provide to us through our website forms:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                    <h3 className="font-bold text-slate-900 mb-2">Contact Form Data</h3>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>✓ Full name</li>
                                        <li>✓ Email address</li>
                                        <li>✓ Restaurant name</li>
                                        <li>✓ Optional message</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                    <h3 className="font-bold text-slate-900 mb-2">Technical Data</h3>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>✓ IP address (anonymized)</li>
                                        <li>✓ Browser type</li>
                                        <li>✓ Device information</li>
                                        <li>✓ Page visit timestamps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">3. Why We Collect Your Data</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We process your personal data for the following purposes:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                    <Mail className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Demo Requests & Contact</h3>
                                        <p className="text-sm text-slate-600">To respond to your inquiries and provide product demonstrations</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <Shield className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Legal Compliance</h3>
                                        <p className="text-sm text-slate-600">To comply with GDPR and other applicable regulations</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                <strong>Legal Basis (GDPR Art. 6):</strong> Your explicit consent, which you provide by checking the consent box on our forms.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">4. How We Protect Your Data</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                    <Lock className="text-orange-400 mb-3" size={32} />
                                    <h3 className="font-bold mb-2">Encryption</h3>
                                    <p className="text-sm text-slate-300">All data transmission uses SSL/TLS encryption</p>
                                </div>
                                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                    <Shield className="text-emerald-400 mb-3" size={32} />
                                    <h3 className="font-bold mb-2">EU Servers</h3>
                                    <p className="text-sm text-slate-300">Data stored exclusively on GDPR-compliant EU servers</p>
                                </div>
                                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                    <Eye className="text-blue-400 mb-3" size={32} />
                                    <h3 className="font-bold mb-2">Access Control</h3>
                                    <p className="text-sm text-slate-300">Strict role-based access for authorized personnel only</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">5. Data Retention</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-600 font-bold mt-1">•</span>
                                    <span><strong>Demo requests:</strong> Up to 24 months after last contact</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-600 font-bold mt-1">•</span>
                                    <span><strong>Marketing communications:</strong> Until you unsubscribe</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-600 font-bold mt-1">•</span>
                                    <span><strong>Legal obligations:</strong> As required by applicable law</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">6. Your Rights (GDPR)</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Under the GDPR, you have the following rights regarding your personal data:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border-l-4 border-orange-500 bg-orange-50/50 p-4 rounded-r-xl">
                                    <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                        <Eye size={18} className="text-orange-600" />
                                        Right to Access
                                    </h3>
                                    <p className="text-sm text-slate-600">Request a copy of all data we hold about you</p>
                                </div>
                                <div className="border-l-4 border-blue-500 bg-blue-50/50 p-4 rounded-r-xl">
                                    <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                        <Trash2 size={18} className="text-blue-600" />
                                        Right to Erasure
                                    </h3>
                                    <p className="text-sm text-slate-600">Request deletion of your personal data</p>
                                </div>
                                <div className="border-l-4 border-emerald-500 bg-emerald-50/50 p-4 rounded-r-xl">
                                    <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                        <Download size={18} className="text-emerald-600" />
                                        Right to Portability
                                    </h3>
                                    <p className="text-sm text-slate-600">Receive your data in a structured format</p>
                                </div>
                                <div className="border-l-4 border-purple-500 bg-purple-50/50 p-4 rounded-r-xl">
                                    <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                        <Lock size={18} className="text-purple-600" />
                                        Right to Object
                                    </h3>
                                    <p className="text-sm text-slate-600">Object to certain types of data processing</p>
                                </div>
                            </div>
                            <div className="mt-6 bg-slate-900 text-white p-6 rounded-2xl">
                                <p className="font-bold mb-2">Exercise Your Rights</p>
                                <p className="text-sm text-slate-300 mb-3">
                                    To exercise any of these rights, contact us at:
                                </p>
                                <a
                                    href="mailto:privacy@chefcode.com"
                                    className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors"
                                >
                                    <Mail size={18} />
                                    privacy@chefcode.com
                                </a>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">7. Data Sharing</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We do <strong className="text-slate-900">not sell or rent</strong> your personal data to third parties. We only share data with:
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-600 font-bold mt-1">•</span>
                                    <span><strong>Service providers:</strong> Trusted partners who help us operate our website (e.g., Web3Forms for contact forms)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-600 font-bold mt-1">•</span>
                                    <span><strong>Legal authorities:</strong> When required by law or to protect our legal rights</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">8. Cookies</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our website uses minimal essential cookies for basic functionality. We do not use tracking or advertising cookies. For more details, see our Cookie Policy.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">9. AI Transparency (EU AI Act)</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                ChefCode uses AI systems for decision support. In compliance with the EU AI Act:
                            </p>
                            <div className="bg-gradient-to-br from-slate-50 to-orange-50/30 border border-orange-200 rounded-2xl p-6">
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-600 font-bold mt-1">✓</span>
                                        <span>All AI recommendations require human approval before action</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-600 font-bold mt-1">✓</span>
                                        <span>Voice data is processed locally on your device (no cloud storage)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-600 font-bold mt-1">✓</span>
                                        <span>Users are always informed when interacting with AI systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-600 font-bold mt-1">✓</span>
                                        <span>Human oversight is maintained for all high-risk decisions (allergens, safety)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">10. Changes to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div className="border-t-2 border-slate-200 pt-8">
                            <h2 className="text-3xl font-black text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                For any privacy-related questions or concerns, please contact us:
                            </p>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold mb-2 text-orange-400">Email</h3>
                                        <a href="mailto:privacy@chefcode.com" className="hover:text-orange-400 transition-colors">
                                            privacy@chefcode.com
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2 text-orange-400">Data Protection Officer</h3>
                                        <a href="mailto:dpo@chefcode.com" className="hover:text-orange-400 transition-colors">
                                            dpo@chefcode.com
                                        </a>
                                    </div>
                                </div>
                            </div>
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
