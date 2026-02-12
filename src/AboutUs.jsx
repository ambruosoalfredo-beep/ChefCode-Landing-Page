

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Menu, X } from 'lucide-react';
import Immagine1 from './assets/Immagine1.png';
import Immagine2 from './assets/Immagine2.jpg';

import Immagine4 from './assets/Immagine4.jpg';
import Immagine5 from './assets/Immagine5.jpg';
import Immagine9 from './assets/Immagine9.jpg';
import met from './assets/met.png';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const AboutUs = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const team = [
        {
            img: Immagine2,
            name: "Alfredo Ambruoso",
            role: t('aboutUs.team.alfredo.role'),
            details: t('aboutUs.team.alfredo.details')
        },
        {
            img: Immagine1,
            name: "Daniele Paciotti",
            role: t('aboutUs.team.daniele.role'),
            details: t('aboutUs.team.daniele.details')
        },
        {
            img: Immagine4,
            name: "Kshama Tupe",
            role: t('aboutUs.team.kshama.role'),
            details: t('aboutUs.team.kshama.details')
        },
        {
            img: met,
            name: "Valerio Cortese",
            role: t('aboutUs.team.valerio.role'),
            details: t('aboutUs.team.valerio.details')
        },
        {
            img: Immagine5,
            name: "Mariem Daha",
            role: t('aboutUs.team.mariem.role'),
            details: t('aboutUs.team.mariem.details')
        },
        {
            img: Immagine9,
            name: "Francesco Balsamo",
            role: t('aboutUs.team.francesco.role'),
            details: t('aboutUs.team.francesco.details')
        }
    ];

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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-slate-900 py-4 lg:py-6'}`}>
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

                    <Link to="/">
                        <button className="btn-aggressive-primary bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm">
                            {t('navbar.backToHome')}
                        </button>
                    </Link>
                    <LanguageSwitcher />

                    <button className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="lg:hidden">
                        <LanguageSwitcher mobile={true} />
                    </div>
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
                    <h1 className="text-4xl md:text-6xl font-black mb-6">{t('aboutUs.hero.title')}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('aboutUs.hero.subtitle')}</p>
                </div>
            </section>

            {/* --- TEAM GRID --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-7xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[30%] min-w-[280px]">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-slate-100 shadow-xl group-hover:scale-105 group-hover:border-orange-200 transition-all duration-300">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</div>
                                <div className="text-slate-500 font-medium leading-relaxed">
                                    {member.details.map((line, idx) => (
                                        <div key={idx} className={idx === 0 ? "font-bold text-slate-700" : ""}>{line}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* --- JOIN US CTA --- */}
            <section className="py-24 bg-slate-900 border-t border-slate-800 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t('aboutUs.join.title')}</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                        {t('aboutUs.join.subtitle')}
                    </p>
                    <Link to="/join-us">
                        <button className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
                            {t('aboutUs.join.button')}
                        </button>
                    </Link>
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
                                <li><Link to="/#features" className="hover:text-orange-500 transition-colors">{t('navbar.features')}</Link></li>
                                <li><Link to="/#how-it-works" className="hover:text-orange-500 transition-colors">{t('navbar.howItWorks')}</Link></li>
                                <li><Link to="/#dr-ai" className="hover:text-orange-500 transition-colors">{t('navbar.drAi')}</Link></li>
                                <li><Link to="/#testimonials" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.integrations')}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">{t('aboutUs.footer.company')}</h4>
                            <ul className="space-y-4 font-medium">
                                <li><Link to="/partners" className="hover:text-orange-500 transition-colors">{t('navbar.partners')}</Link></li>
                                <li><Link to="/about" className="hover:text-orange-500 transition-colors text-orange-500">{t('navbar.aboutUs')}</Link></li>
                                <li><Link to="/#demo-signup" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.contact')}</Link></li>
                                <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.privacy')}</Link></li>
                            </ul>
                        </div>


                    </div>

                    <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-600 font-medium">
                        <p>{t('aboutUs.footer.copyright')}</p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default AboutUs;
