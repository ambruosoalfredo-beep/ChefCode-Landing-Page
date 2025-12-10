
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Menu, X } from 'lucide-react';
import Immagine1 from './assets/Immagine1.png';
import Immagine2 from './assets/Immagine2.jpg';
import Immagine3 from './assets/Immagine3.jpg';
import Immagine4 from './assets/Immagine4.jpg';
import Immagine5 from './assets/Immagine5.jpg';

const AboutUs = () => {
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
            role: "20+yrs kitchen leadership",
            details: ["Menu & workflow designer", "Food-cost & HACCP specialist"]
        },
        {
            img: Immagine1,
            name: "Daniele Paciotti",
            role: "26+yrs Product Management",
            details: ["Business Management", "Sales Management"]
        },
        {
            img: Immagine3,
            name: "Valerio Cortese",
            role: "Freelancer",
            details: ["Multi-disciplinary creative", "UI & branding specialist"]
        },
        {
            img: Immagine4,
            name: "Kshama Tupe",
            role: "Senior Business Analyst",
            details: ["Solution Designer", "Digital Innovation"]
        },
        {
            img: Immagine5,
            name: "Mariem Daha",
            role: "Software Engineer",
            details: ["Web Designer", "AI & Analytic focus"]
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
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Our Team</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">The minds behind the kitchen revolution.</p>
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
                                        <div key={idx}>{line}</div>
                                    ))}
                                </div>
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
                                <li><Link to="/partners" className="hover:text-orange-500 transition-colors">Partners</Link></li>
                                <li><Link to="/about" className="hover:text-orange-500 transition-colors text-orange-500">About Us</Link></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
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

export default AboutUs;
