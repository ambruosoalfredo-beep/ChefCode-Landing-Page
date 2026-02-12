
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import Immagine6 from './assets/Immagine6.png';
import Immagine7 from './assets/Immagine7.png';
import Immagine8 from './assets/Immagine8.png';
import dimarcoImg from './assets/di marco.webp';
import dimarcoPersona from './assets/dimarcopersona.png';
import fdgLogo from './assets/fdg.png';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import carlaLogo from './assets/logocarla.png';

const Partners = () => {
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

    const partnersFDG = [
        {
            img: Immagine6,
            logo: fdgLogo,
            name: "Flavio Di Gregorio",
            role: t('partnersPage.fdg.flavio.role'),
            details: t('partnersPage.fdg.flavio.details')
        },
        {
            img: Immagine7,
            name: "Maria Teresa Lombardi",
            role: t('partnersPage.fdg.maria.role'),
            details: t('partnersPage.fdg.maria.details')
        }
    ];

    const partnersTeodori = [
        {
            img: Immagine8,
            logo: carlaLogo,
            name: "Carla Teodori",
            role: t('partnersPage.teodori.role'),
            details: t('partnersPage.teodori.details')
        }
    ];

    const partnersDiMarco = [
        {
            img: dimarcoPersona,
            logo: dimarcoImg,
            name: "Corrado Di Marco",
            role: t('partnersPage.dimarco.role'),
            details: t('partnersPage.dimarco.details')
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

                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link to="/">
                            <button className="bg-white hover:bg-orange-500 hover:text-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300">
                                {t('navbar.backToHome')}
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
                        <div className="pt-4 border-t border-slate-800">
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </nav>

            {/* --- HEADER --- */}
            <section className="pt-32 lg:pt-48 pb-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">{t('partnersPage.title')}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('partnersPage.subtitle')}</p>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 mt-2">{t('partnersPage.desc')}</p>

                    {/* Partner CTA */}
                    <div className="max-w-6xl mx-auto mt-12 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-6">
                        <p className="text-lg text-slate-300 leading-relaxed text-center">
                            <span className="text-orange-500 font-bold">{t('partnersPage.cta.highlight')}</span> {t('partnersPage.cta.text')}
                        </p>
                        <Link to="/become-partner" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105">
                            {t('partnersPage.cta.button')}
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>





            {/* --- PARTNER: Di Marco --- */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t('partnersPage.dimarco.title')}</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">{t('partnersPage.dimarco.subtitle')}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-5xl mx-auto">
                        {partnersDiMarco.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[40%] min-w-[280px]">
                                <div className="relative mb-8">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl group-hover:scale-105 transition-all duration-300 bg-slate-100">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover scale-125" />
                                    </div>
                                    {member.logo && (
                                        <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-white rounded-full border-2 border-slate-100 shadow-md flex items-center justify-center overflow-hidden z-10 group-hover:scale-110 transition-transform p-1.5">
                                            <img src={member.logo} alt="Brand Logo" className="w-full h-full object-contain scale-150" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</div>
                                <div className="text-slate-500 font-medium leading-relaxed mb-6">
                                    {member.details.map((line, idx) => (
                                        <div key={idx} className="mb-1">{line}</div>
                                    ))}
                                </div>
                                <a href="https://www.pinsadimarco.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm mt-4">
                                    {t('partnersPage.dimarco.website')} <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PARTNER: Chef Carla Teodori --- */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t('partnersPage.teodori.title')}</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-5xl mx-auto">
                        {partnersTeodori.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[30%] min-w-[280px]">
                                <div className="relative mb-8">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl group-hover:scale-105 transition-all duration-300">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    {member.logo && (
                                        <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-black rounded-full border-2 border-slate-100 shadow-md flex items-center justify-center overflow-hidden z-10 group-hover:scale-110 transition-transform p-1.5">
                                            <img src={member.logo} alt="Brand Logo" className="w-full h-full object-contain scale-110" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</div>
                                <div className="text-slate-500 font-medium leading-relaxed">
                                    {member.details.map((line, idx) => (
                                        <div key={idx} className="mb-1">{line}</div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PARTNER: Food & Diet Goal --- */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t('partnersPage.fdg.title')}</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-5xl mx-auto">
                        {partnersFDG.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[30%] min-w-[280px]">
                                <div className="relative mb-8">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl group-hover:scale-105 transition-all duration-300">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    {member.logo && (
                                        <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-black rounded-full border-2 border-slate-100 shadow-md flex items-center justify-center overflow-hidden z-10 group-hover:scale-110 transition-transform p-1.5">
                                            <img src={member.logo} alt="Brand Logo" className="w-full h-full object-contain scale-110" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</div>
                                <div className="text-slate-500 font-medium leading-relaxed">
                                    {member.details.map((line, idx) => (
                                        <div key={idx}>{line}</div>
                                    ))}
                                </div>
                                {member.name === "Flavio Di Gregorio" && (
                                    <a href="https://foodanddietgoal.it/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm mt-4">
                                        {t('partnersPage.fdg.website')} <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        ))}
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
                                <li><Link to="/#features" className="hover:text-orange-500 transition-colors">{t('navbar.features')}</Link></li>
                                <li><Link to="/#how-it-works" className="hover:text-orange-500 transition-colors">{t('navbar.howItWorks')}</Link></li>
                                <li><Link to="/#dr-ai" className="hover:text-orange-500 transition-colors">{t('navbar.drAi')}</Link></li>
                                <li><Link to="/#testimonials" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.integrations')}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">{t('aboutUs.footer.company')}</h4>
                            <ul className="space-y-4 font-medium">
                                <li><Link to="/partners" className="hover:text-orange-500 transition-colors text-orange-500">{t('navbar.partners')}</Link></li>
                                <li><Link to="/about" className="hover:text-orange-500 transition-colors">{t('navbar.aboutUs')}</Link></li>
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

export default Partners;
