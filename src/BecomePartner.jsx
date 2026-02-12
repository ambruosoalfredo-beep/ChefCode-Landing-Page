import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { ArrowLeft } from 'lucide-react';

import { useLanguage } from './context/LanguageContext';

const BecomePartner = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'bb65b8a8-c554-46d6-bf6c-8e57bcb0b629',
                    subject: 'New Partnership Inquiry - ChefCode',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                    firstName: formData.firstName,
                    lastName: formData.lastName
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 py-4 md:py-6">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <img src={logo} alt="ChefCode" className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </Link>
                    <Link to="/partners" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-bold">
                        <ArrowLeft size={20} />
                        {t('becomePartner.header.backToPartners')}
                    </Link>
                </div>
            </nav>

            {/* Form Section */}
            <section className="pt-48 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">{t('becomePartner.hero.title')}</h1>
                            <p className="text-xl text-slate-600">
                                {t('becomePartner.hero.desc')}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('becomePartner.form.firstName')} <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        placeholder={t('becomePartner.form.placeholder.firstName')}
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('becomePartner.form.lastName')} <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        placeholder={t('becomePartner.form.placeholder.lastName')}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('becomePartner.form.email')} <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        placeholder={t('becomePartner.form.placeholder.email')}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('becomePartner.form.message')} <span className="text-orange-600">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                                        placeholder={t('becomePartner.form.placeholder.message')}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {formStatus === 'loading' ? t('becomePartner.form.loading') : t('becomePartner.form.button')}
                                </button>

                                {/* Success Message */}
                                {formStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                                        {t('becomePartner.form.success')}
                                    </div>
                                )}

                                {/* Error Message */}
                                {formStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">
                                        {t('becomePartner.form.error')}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BecomePartner;
