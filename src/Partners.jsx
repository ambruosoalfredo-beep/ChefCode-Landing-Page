
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import Immagine6 from './assets/Immagine6.png';
import Immagine7 from './assets/Immagine7.png';
import Immagine8 from './assets/Immagine8.png';

const Partners = () => {
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
            name: "Flavio Di Gregorio",
            role: "Founder Food & Diet Goal",
            details: ["University Researcher", "Doctor & Nutritionist"]
        },
        {
            img: Immagine7,
            name: "Maria Teresa Lombardi",
            role: "Collaborating Nutritionist",
            details: ["Biologist Nutritionist"]
        }
    ];

    const partnersTeodori = [
        {
            img: Immagine8,
            name: "Carla Teodori",
            role: "Chef & Restaurant Consultant",
            details: ["2★ Michelin Training", "International Restaurant Opening & Management"]
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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-3 border-b border-white/5' : 'bg-slate-900 py-4 md:py-6'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <img src={logo} alt="ChefCode" className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/#how-it-works">How it Works</NavLink>
                        <NavLink to="/#features">Features</NavLink>
                        <NavLink to="/#dr-ai">Dr.AI</NavLink>
                        <NavLink to="/#testimonials">Testimonials</NavLink>
                        <NavLink to="/partners">Partners</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/">
                            <button className="bg-white hover:bg-orange-500 hover:text-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300">
                                Back to Home
                            </button>
                        </Link>
                    </div>

                    <button className="md:hidden p-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
                        <NavLink to="/" mobile>Home</NavLink>
                        <NavLink to="/partners" mobile>Partners</NavLink>
                        <NavLink to="/about" mobile>About Us</NavLink>
                    </div>
                )}
            </nav>

            {/* --- HEADER --- */}
            <section className="pt-48 pb-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Our Partners</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">Collaborating with the best to deliver excellence.</p>

                    {/* Partner CTA */}
                    <div className="max-w-6xl mx-auto mt-12 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-6">
                        <p className="text-lg text-slate-300 leading-relaxed text-center">
                            <span className="text-orange-500 font-bold">Join the revolution.</span> We're building the future of food tech and looking for visionary partners who share our mission to transform the culinary industry through innovation and sustainability.
                        </p>
                        <Link to="/become-partner" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105">
                            Become a Partner
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- PARTNER 1: Food & Diet Goal --- */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Food & Diet Goal</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-5xl mx-auto">
                        {partnersFDG.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[30%] min-w-[280px]">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-slate-100 shadow-xl group-hover:scale-105 group-hover:border-orange-200 transition-all duration-300">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
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
                                        Visit Website <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PARTNER 2: Chef Carla Teodori --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Professional Chef</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 text-center max-w-5xl mx-auto">
                        {partnersTeodori.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group w-full md:w-[30%] min-w-[280px]">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-slate-100 shadow-xl group-hover:scale-105 group-hover:border-orange-200 transition-all duration-300">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</div>
                                <div className="text-slate-500 font-medium leading-relaxed">
                                    {member.details.map((line, idx) => (
                                        <div key={idx}>{line}</div>
                                    ))}
                                </div>
                                {member.name === "Carla Teodori" && (
                                    <a href="http://www.chefteodori.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm mt-4">
                                        Visit Website <ExternalLink size={16} />
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
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-white">
                                <img src={logo} alt="ChefCode" className="h-24 w-auto object-contain" />
                            </div>
                            <p className="mb-6 max-w-xs leading-relaxed font-medium text-slate-500">
                                Smart Solutions for Smarter Kitchens
                            </p>
                            <div className="flex gap-6">
                                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-bold">LinkedIn</a>
                                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-bold">Instagram</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">Product</h4>
                            <ul className="space-y-4 font-medium">
                                <li><Link to="/#features" className="hover:text-orange-500 transition-colors">Features</Link></li>
                                <li><Link to="/#how-it-works" className="hover:text-orange-500 transition-colors">How it Works</Link></li>
                                <li><Link to="/#dr-ai" className="hover:text-orange-500 transition-colors">Dr.AI</Link></li>
                                <li><Link to="/#testimonials" className="hover:text-orange-500 transition-colors">Integrations</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">Company</h4>
                            <ul className="space-y-4 font-medium">
                                <li><Link to="/partners" className="hover:text-orange-500 transition-colors text-orange-500">Partners</Link></li>
                                <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                                <li><Link to="/#demo-signup" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                                <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-base">Newsletter</h4>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-orange-500 transition-colors text-white" />
                                <button className="bg-orange-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-orange-500 transition-colors">Go</button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-600 font-medium">
                        <p>&copy; 2025 ChefCode. All rights reserved.</p>
                    </div>
                </div>
            </footer >
        </div>
    );
};

export default Partners;
