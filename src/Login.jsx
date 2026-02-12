import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { ArrowRight, Mail, Lock } from 'lucide-react';

import { useLanguage } from './context/LanguageContext';

const Login = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Login logic will go here
        console.log('Login submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] opacity-40"></div>

            <div className="relative z-10 w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <Link to="/" className="inline-block">
                        <img src={logo} alt="ChefCode" className="h-32 w-auto mx-auto hover:scale-105 transition-transform" />
                    </Link>
                    <h1 className="text-3xl font-black text-white mt-6 mb-2">{t('login.welcome')}</h1>
                    <p className="text-slate-400 font-medium">{t('login.subtitle')}</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                    {t('login.email')}
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                                        placeholder={t('login.placeholder.email')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
                                    {t('login.password')}
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                                        placeholder={t('login.placeholder.password')}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 focus:ring-2" />
                                    <span className="text-slate-600 font-medium">{t('login.rememberMe')}</span>
                                </label>
                                <a href="#" className="text-orange-600 font-bold hover:underline">{t('login.forgotPassword')}</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-400/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                <span>{t('login.signIn')}</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-600 text-sm">
                                {t('login.noAccount')} <Link to="/register" className="text-orange-600 font-bold hover:underline">{t('login.joinBeta')}</Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-8">
                    <Link to="/" className="text-slate-400 hover:text-white transition-colors font-medium text-sm inline-flex items-center gap-2">
                        ← {t('login.backToHome')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
