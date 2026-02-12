import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Menu, X, ArrowRight } from 'lucide-react';

import { useLanguage } from './context/LanguageContext';

const Register = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will go here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const NavLink = ({ to, children, mobile }) => (
        <Link
            to={to}
            className={`${mobile ? 'text-lg text-slate-300' : 'text-sm'} text-slate-300 hover:text-white font-medium transition-colors duration-200 tracking-wide`}
            onClick={() => setIsMenuOpen(false)}
        >
            {children}
        </Link>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* --- NAVBAR --- */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-3 border-b border-white/5' : 'bg-slate-900 py-4 lg:py-6'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <img src={logo} alt="ChefCode" className="h-16 lg:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <NavLink to="/#how-it-works">{t('navbar.howItWorks')}</NavLink>
                        <NavLink to="/#features">{t('navbar.features')}</NavLink>
                        <NavLink to="/#dr-ai">{t('navbar.drAi')}</NavLink>
                        <NavLink to="/#testimonials">{t('navbar.testimonials')}</NavLink>
                        <NavLink to="/partners">{t('navbar.partners')}</NavLink>
                        <NavLink to="/about">{t('navbar.aboutUs')}</NavLink>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/">
                            <button className="bg-white hover:bg-orange-500 hover:text-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300">
                                {t('register.navbar.backToHome')}
                            </button>
                        </Link>
                    </div>

                    <button className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
                        <NavLink to="/" mobile>{t('navbar.home')}</NavLink>
                        <NavLink to="/partners" mobile>{t('navbar.partners')}</NavLink>
                        <NavLink to="/about" mobile>{t('navbar.aboutUs')}</NavLink>
                    </div>
                )}
            </nav>

            {/* --- HEADER --- */}
            <section className="pt-32 lg:pt-48 pb-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">{t('register.hero.title')}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('register.hero.desc')}</p>
                </div>
            </section>

            {/* --- REGISTRATION FORM --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden p-12">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 text-slate-900">{t('register.form.title')}</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('register.form.name')} <span className="text-orange-600">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                                        placeholder={t('register.form.placeholder.name')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('register.form.email')} <span className="text-orange-600">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                                        placeholder={t('register.form.placeholder.email')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                                        {t('register.form.phone')} <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required

                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                                        placeholder={t('register.form.placeholder.phone')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-400/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                >
                                    <span>{t('register.form.button')}</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-slate-500 text-sm">
                                    {t('register.form.hasAccount')} <Link to="/" className="text-orange-600 font-bold hover:underline">{t('register.form.login')}</Link>
                                </p>
                            </form>
                        </div>

                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center gap-3 text-sm text-slate-600 font-bold bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                {t('register.form.free')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-sm text-slate-500">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-white">
                                <img src={logo} alt="ChefCode" className="h-24 w-auto object-contain" />
                            </div>
                            <p className="mb-6 max-w-xs leading-relaxed font-medium text-slate-500">
                                {t('aboutUs.footer.tagline')}
                            </p>
                            <div className="flex gap-6">
                                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-bold">LinkedIn</a>
                                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-bold">Instagram</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">{t('aboutUs.footer.product')}</h4>
                            <ul className="space-y-4 font-medium">
                                <li><a href="/#features" className="hover:text-orange-500 transition-colors">{t('navbar.features')}</a></li>
                                <li><a href="/#how-it-works" className="hover:text-orange-500 transition-colors">{t('navbar.howItWorks')}</a></li>
                                <li><a href="/#dr-ai" className="hover:text-orange-500 transition-colors">{t('navbar.drAi')}</a></li>
                                <li><a href="/#integrations" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.integrations')}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">{t('aboutUs.footer.company')}</h4>
                            <ul className="space-y-4 font-medium">
                                <li><Link to="/partners" className="hover:text-orange-500 transition-colors">{t('navbar.partners')}</Link></li>
                                <li><Link to="/about" className="hover:text-orange-500 transition-colors">{t('navbar.aboutUs')}</Link></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.contact')}</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.privacy')}</a></li>
                            </ul>
                        </div>


                    </div>

                    <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-600 font-medium">
                        <p>{t('aboutUs.footer.copyright')}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Register;
