import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import videoDemo from './assets/ChefCode Emotional video_ENG.mp4';
import { motion } from 'framer-motion';
import {
  ChefHat,
  Mic,
  ScanLine,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Zap,
  TrendingUp,
  FileText,
  Layers,
  ShoppingBasket,
  Play,
  Leaf,
  Smartphone,
  Search,
  MessageSquare
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to demo section
  const scrollToDemo = (e) => {
    e.preventDefault();
    const demoSection = document.getElementById('demo-signup');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, scrolled, mobile }) => (
    <a
      href={href}
      className={`${mobile ? 'text-lg text-slate-300' : 'text-sm'} ${scrolled || mobile ? 'text-slate-300 hover:text-white' : 'text-slate-300 hover:text-white'} font-medium transition-colors duration-200 tracking-wide`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Link logo to home */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Link to="/">
              <img src={logo} alt="ChefCode" className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/#how-it-works" scrolled={scrolled}>How it Works</NavLink>
            <NavLink href="/#features" scrolled={scrolled}>Features</NavLink>
            <NavLink href="/#dr-ai" scrolled={scrolled}>Dr.AI</NavLink>
            <NavLink href="/#testimonials" scrolled={scrolled}>Testimonials</NavLink>
            <NavLink href="/partners" scrolled={scrolled}>Partners</NavLink>
            <NavLink href="/about" scrolled={scrolled}>About Us</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={scrollToDemo} className={`${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-300 hover:text-white'} font-bold text-sm transition-colors`}>
              Log in
            </button>
            <button
              onClick={scrollToDemo}
              className="bg-white hover:bg-orange-500 hover:text-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <NavLink href="/#how-it-works" mobile>How it Works</NavLink>
            <NavLink href="/#features" mobile>Features</NavLink>
            <NavLink href="/#dr-ai" mobile>Dr.AI</NavLink>
            <NavLink href="/partners" mobile>Partners</NavLink>
            <NavLink href="/about" mobile>About Us</NavLink>
            <button onClick={scrollToDemo} className="bg-orange-600 text-white w-full py-3 rounded-lg font-bold shadow-lg shadow-orange-900/50">
              Book a Demo
            </button>
          </div>
        )}
      </nav>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <video
              src={videoDemo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsVideoOpen(false)}
          ></div>
        </div>
      )}

      {/* --- HERO SECTION (Hypnotic Dark Theme) --- */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-48 overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src={videoDemo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-50"
            style={{ objectPosition: 'center center' }}
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Dynamic Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] opacity-60 mix-blend-screen animate-pulse duration-700 pointer-events-none translate-x-1/3 -translate-y-1/4 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none -translate-x-1/4 translate-y-1/4 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-sm font-bold mb-10 shadow-xl backdrop-blur-md hover:scale-105 transition-transform cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span>The AI Revolution for Kitchens is Here</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-10 text-white tracking-tighter"
          >
            Your AI Sous-Chef <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-gradient-x">
              Turning Chaos into Control.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            ChefCode is the <span className="text-white font-semibold">invisible brain</span> of your kitchen. It listens, learns, and optimizes—turning voice, invoices, and sales data into effortless profit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <button onClick={scrollToDemo} className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] hover:scale-105 transition-all flex items-center gap-2 group min-w-[240px] justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Start Free Trial</span>
              <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button onClick={() => setIsVideoOpen(true)} className="bg-slate-800/50 border border-slate-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 hover:border-orange-500/50 transition-all flex items-center gap-2 min-w-[240px] justify-center backdrop-blur-sm">
              <Play size={18} fill="currentColor" className="text-white" />
              ChefCode Vision
            </button>
          </motion.div>

          {/* Floating Glass Cards Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="border-t border-slate-800/60 pt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {[
              { val: "6%", label: "Net Profit", desc: "Improvement", color: "text-emerald-400" },
              { val: "20%", label: "Food Cost Saved", desc: "Average in 3 months", color: "text-orange-400" },
              { val: "10h", label: "Time/Week Saved", desc: "For Executive Chefs", color: "text-blue-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm flex items-center gap-4 hover:bg-slate-800/50 transition-colors group">
                <div className={`text-4xl font-black ${stat.color} group-hover:scale-110 transition-transform origin-left`}>{stat.val}</div>
                <div>
                  <div className="text-white font-bold leading-tight">{stat.label}</div>
                  <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Dark Offset) --- */}
      <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">Three Steps. Zero Chaos.</h2>
            <p className="text-orange-600 font-bold text-lg tracking-wide uppercase opacity-90">Less admin. More time for creativity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: <ScanLine className="w-12 h-12 text-white" />,
                title: "Scan & Capture",
                desc: "Snap invoices or speak recipes, tasks, and ingredients. ChefCode logs everything instantly."
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-white" />,
                title: "Track & Organize",
                desc: "Real-time stock visibility. Get smart alerts before you run out or overspend."
              },
              {
                icon: <Layers className="w-12 h-12 text-white" />,
                title: "Plan & Produce",
                desc: "Auto-generated prep lists and recipes perfectly timed to your rhythm."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl rotate-3 flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:rotate-6 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/40 transition-all duration-500 mb-8 border border-slate-700/30 group-hover:border-orange-400/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HYBRID AI SECTION (Dark & Powerful) --- */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="features"
        className="py-24 bg-slate-900 rounded-[3rem] mx-4 md:mx-8 my-8 relative overflow-hidden border border-slate-800 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <Mic size={14} className="text-orange-500" />
                Voice First Technology
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-white">
                Your kitchen, AI-Powered. <br />
                <span className="text-slate-500">Even offline.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                ChefCode uses a hybrid AI engine.
                <strong className="text-white bg-slate-800 px-2 py-0.5 rounded mx-1 border border-slate-700">Local AI</strong> &
                <strong className="text-white bg-slate-800 px-2 py-0.5 rounded mx-1 border border-slate-700">Cloud AI</strong>
              </p>

              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Zap size={20} /></div>
                  Hybrid Engine Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-medium"><strong>Local AI</strong> for fast, offline voice inputs in noisy kitchens</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-medium"><strong>Cloud AI</strong> for advanced reasoning, predictions, menu engineering, allergens & nutrition</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 pt-2 border-t border-slate-700/50">
                    <span className="font-medium text-white">Speak, type, or scan - ChefCode adapts to your workflow.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              {/* Visual Representation of Voice AI - MORE CONTRAST & VISUAL CANDY */}
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-orange-500/20 to-indigo-500/20 rounded-full opacity-50 blur-3xl animate-pulse"></div>

                {/* Main Card */}
                <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 relative z-10">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Listening Mode</span>
                    </div>
                    <div className="px-3 py-1 bg-slate-900 rounded-full text-xs font-bold text-slate-500 border border-slate-700/50">OFFLINE READY</div>
                  </div>

                  <div className="space-y-8">
                    {/* Chef Input Bubble */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center shrink-0 border border-slate-600 shadow-sm">
                        <ChefHat size={24} className="text-slate-400" />
                      </div>
                      <div className="bg-slate-700 p-5 rounded-3xl rounded-tl-none text-slate-200 text-base font-medium shadow-sm border border-slate-600/50">
                        "Add 20kg of potatoes and 5 liters of cream to the inventory."
                      </div>
                    </div>

                    {/* AI Response Bubble */}
                    <div className="flex gap-4 flex-row-reverse">
                      <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                        <BrainCircuit size={24} className="text-white" />
                      </div>
                      <div className="bg-white p-5 rounded-3xl rounded-tr-none text-slate-800 text-sm shadow-xl border border-slate-200 w-full max-w-xs relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                          <span className="font-bold text-slate-900">Processed Successfully</span>
                        </div>

                        {/* Styled Data Cards */}
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">P</div>
                              <div>
                                <div className="text-xs text-slate-400 font-bold uppercase">Item</div>
                                <div className="font-bold text-slate-800">Potatoes</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-400 font-bold uppercase">Qty</div>
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="font-bold text-emerald-600"
                              >
                                + 20 KG
                              </motion.div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">C</div>
                              <div>
                                <div className="text-xs text-slate-400 font-bold uppercase">Item</div>
                                <div className="font-bold text-slate-800">Heavy Cream</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-400 font-bold uppercase">Qty</div>
                              <div className="font-bold text-emerald-600">+ 5 L</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center font-bold text-white text-lg">
                  "Hands full? No problem. It works anyway."
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- GRID FEATURES (OCR & POS - More Visual) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

            {/* Feature 1: OCR - High Contrast White on Light */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 mb-8 text-orange-600 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                <FileText size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900">From paper to data - <br />in seconds.</h3>
              <h4 className="text-xl font-bold text-orange-600 mb-4">Snap, Scan, Approve</h4>
              <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                ChefCode’s OCR reads invoices like a pro - extracting ingredients, prices, and suppliers automatically.
                Forget manual entry. Forget errors. Just scan and go.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span>Instant invoice processing</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span>Automatic cost tracking</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span>Alerts for pricing changes</span>
                </div>
              </div>

              <p className="text-slate-500 font-bold italic border-l-4 border-orange-500 pl-4">
                "Automation that speaks your kitchen’s language."
              </p>

              {/* Visual Element for OCR */}
              <div className="mt-10 bg-white rounded-2xl p-4 shadow-lg border border-slate-100 relative max-w-sm mx-auto transform rotate-1 group-hover:rotate-0 transition-transform">
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-2 mb-2">
                  <div className="text-xs font-bold text-slate-400">INVOICE #4029</div>
                  <div className="text-xs font-bold text-emerald-500 flex items-center gap-1"><CheckCircle2 size={12} /> SCANNED</div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-2 bg-slate-100 rounded w-full"></div>
                </div>
                <div className="absolute -right-3 -bottom-3 bg-orange-600 text-white p-2 rounded-lg shadow-lg">
                  <ScanLine size={20} />
                </div>
              </div>
            </motion.div>

            {/* Feature 2: POS - Dark Elegant Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl text-white relative overflow-hidden group"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-bl-full opacity-80 -mr-20 -mt-20 group-hover:scale-105 transition-transform duration-700"></div>

              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner mb-8 text-orange-400 relative z-10 border border-slate-700">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white relative z-10">Your sales data,<br /> Fully alive.</h3>
              <p className="text-slate-400 mb-8 leading-relaxed relative z-10 font-medium">
                ChefCode connects directly to your POS and updates dish profitability in real time -ingredient-by-ingredient, recipe-by-recipe.
              </p>

              <ul className="space-y-2 mb-8 text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Live COGS & margin per dish
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Menu performance insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Waste and prep variance monitoring
                </li>
              </ul>

              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 backdrop-blur-md relative z-10 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-slate-300">Dish Margin Analysis</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full uppercase tracking-wide font-bold">Live Data</span>
                </div>
                {/* Mockup Chart Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 text-slate-400 font-semibold">
                      <span>Wagyu Burger</span>
                      <span className="text-white">72% Margin</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[72%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 text-slate-400 font-semibold">
                      <span>Truffle Pasta</span>
                      <span className="text-white">64% Margin</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[64%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-orange-400 font-bold text-lg tracking-wide uppercase opacity-90 text-center border-t border-slate-800 pt-6">
                Your menu finally tells the truth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PREP & HACCP (Clean Light Layout with Stacking Cards) --- */}
      < section className="py-24 bg-white border-t border-slate-100" >
        <div className="container mx-auto px-4 md:px-8">

          {/* Prep Lists */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 order-2 md:order-1 perspective-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-200 rounded-3xl transform rotate-6 scale-95 opacity-50 transition-transform group-hover:rotate-3"></div>
                <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative transform transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100">
                      <ChefHat size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Morning Prep</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Forecast: 120 Covers</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { item: 'Dice Onions', qty: '5 kg', status: 'done' },
                      { item: 'Marinate Chicken', qty: '10 kg', status: 'pending' },
                      { item: 'Prep Salad Base', qty: '20 units', status: 'pending' },
                    ].map((task, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${task.status === 'done' ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${task.status === 'done' ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                            {task.status === 'done' && <CheckCircle2 size={14} className="text-white" />}
                          </div>
                          <span className={task.status === 'done' ? 'line-through text-slate-400 font-medium' : 'text-slate-800 font-bold'}>{task.item}</span>
                        </div>
                        <span className="text-xs font-bold bg-slate-100 px-2.5 py-1.5 rounded-lg text-slate-600 border border-slate-200">{task.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <button className="text-orange-600 font-bold text-sm hover:underline flex items-center justify-center gap-2 mx-auto">View Full Plan <ArrowRight size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">Prep lists that <br /><span className="text-orange-600">build themselves.</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                ChefCode generates dynamic production plans based on Sales history, Forecasted trends & events, and Current inventory.
                <br /><br />
                <span className="text-slate-800 font-bold">The system calculates the prep; the Admin assigns the tasks. Perfect for organized mise en place.</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Smart prep lists
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Batch production & scaling
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Auto-deduction of raw items
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Semi-finished item tracking
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Auto-shopping from stock and sales, approved by you.
                </li>
              </ul>
              <p className="text-slate-500 font-bold italic border-l-4 border-orange-500 pl-4">
                "Workflows as sharp as your knives."
              </p>
            </div>
          </div>

          {/* HACCP */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-3xl -z-10 -mt-40"></div>

            <div className="max-w-3xl mx-auto relative z-10">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                <ShieldCheck size={40} className="text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">HACCP - Food safety. <br />Automatically handled.</h2>
              <p className="text-slate-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                ChefCode tracks every movement in your kitchen with full traceability. From goods-in to production to sale, your HACCP records are created automatically.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
                {[
                  'Temperature & expiry logs',
                  'Batch traceability',
                  'Daily compliance checklists',
                  'Instant audit-ready reports'
                ].map((tag, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-300 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    {tag}
                  </span>
                ))}

                {/* Future Feature Badge */}
                <div className="w-full flex justify-center mt-4">
                  <div className="px-6 py-3 bg-slate-800/80 border border-slate-700 rounded-2xl backdrop-blur-md flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left hover:border-indigo-500/50 transition-colors group cursor-default">
                    <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm flex items-center gap-2 justify-center sm:justify-start">
                        Blockchain-based data integrity
                        <span className="text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Coming Soon</span>
                      </div>
                      <div className="text-slate-400 text-xs font-medium">Future feature for tamper-proof food safety records</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-emerald-500/30 hover:-translate-y-1">
                  Download Free HACCP Checklist
                </button>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-2 sm:mt-0 flex items-center justify-center bg-slate-800 px-3 py-1 rounded-lg">
                  No sign-up required
                </div>
              </div>

              <p className="mt-12 text-center text-white font-bold text-xl italic tracking-wide border-t border-emerald-500/30 pt-8 max-w-md mx-auto opacity-90">
                "Compliance without the clipboard."
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* --- DR. AI (Modern Card Style - Pop-up Effect) --- */}
      < section id="dr-ai" className="py-24 bg-orange-50/50" >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">Meet Dr.AI <br /> <span className="text-orange-600">Your menu’s smartest advisor</span></h2>
            <p className="text-xl text-slate-600 font-medium">
              Dr.AI turns dietary restrictions into profitable opportunities. It adapts menus or invents dishes on the fly using available stock, making your kitchen the safest choice and your service a powerful magnet for groups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-purple-500/10 group-hover:shadow-purple-600/30">
                <BrainCircuit size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Smart Suggestions</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Suggest dishes based on what’s in stock. Recommend alternatives when ingredients run out.</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-blue-500/10 group-hover:shadow-blue-600/30">
                <TrendingUp size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Profit Engineering</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Optimize menus with the right balance between profitability and dietary or allergen.</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-red-500/10 group-hover:shadow-red-600/30">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Allergen Safety</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Automatically tag allergens & dietary info. Support staff with real-time guidance.</p>
            </motion.div>
          </div>

          <p className="mt-12 text-center text-orange-600 font-bold text-xl italic tracking-wide border-t border-orange-200/50 pt-8 max-w-md mx-auto opacity-90">
            "Menu engineering meets nutritional intelligence."
          </p>
        </div>
      </section>

      {/* --- ECOSYSTEM & ANALYTICS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-slate-900 rounded text-[10px] font-bold text-white uppercase tracking-wider mb-6">COMING SOON</div>
              <h3 className="text-4xl font-black mb-6 text-slate-900">Restaurant ↔ Supplier Marketplace</h3>
              <p className="text-slate-600 mb-8 text-lg font-medium">A connected ecosystem where restaurants buy directly from approved suppliers with discounted products and instant price syncing.</p>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden group hover:border-orange-200 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="flex items-center gap-6 text-slate-600 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-orange-500/10 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBasket size={36} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-slate-900 text-xl max-w-[200px] leading-tight">Automated purchasing becomes effortless.</span>
                </div>
              </div>
              <p className="mt-8 text-center text-orange-600 font-bold text-lg italic tracking-wide border-t border-orange-200/50 pt-6 max-w-sm mx-auto opacity-90">
                "Where kitchens and suppliers connect effortlessly."
              </p>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl text-white relative overflow-hidden group flex-1">
              {/* Abstract decorative graphic */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-bl-full opacity-80 -mr-20 -mt-20 group-hover:scale-105 transition-transform duration-700"></div>

              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner mb-8 text-orange-400 relative z-10 border border-slate-700">
                <BarChart3 size={32} />
              </div>

              <h3 className="text-4xl font-black mb-6 text-white relative z-10">Your Kitchen, Decoded.</h3>
              <p className="text-slate-400 mb-8 text-lg font-medium relative z-10">See exactly what’s working - and what’s wasting. From live food costs to supplier insights, ChefCode gives managers and chefs the clarity to act fast.</p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center gap-3 text-slate-300 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Real-time food cost (COGS) tracking
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Waste and prep accuracy reports
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Supplier and price performance
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-bold">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  Multi-location visibility
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 text-center backdrop-blur-md shadow-lg">
                  <div className="text-4xl font-black text-orange-400 mb-2 tracking-tight">-12%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Food Waste</div>
                </div>
                <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 text-center backdrop-blur-md shadow-lg">
                  <div className="text-4xl font-black text-blue-400 mb-2 tracking-tight">+8%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Margin Avg</div>
                </div>
              </div>

              <p className="mt-8 text-center text-orange-400 font-bold text-lg italic tracking-wide border-t border-slate-800 pt-6 max-w-sm mx-auto opacity-90 relative z-10">
                "Numbers made human. Insights made useful."
              </p>
            </div>
          </div>

          {/* Integrations Banner Replacement */}
          <div className="border-t border-slate-100 pt-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">Powerful integrations that grow with you.</h2>
            <p className="text-slate-600 mb-12 text-lg font-medium max-w-2xl mx-auto">ChefCode connects with the tools your kitchen already uses.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-lg transition-all flex items-center justify-center">
                <span className="font-bold text-slate-700 text-lg">POS systems</span>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-lg transition-all flex items-center justify-center">
                <span className="font-bold text-slate-700 text-lg">Restaurant management/ERP systems</span>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-lg transition-all relative overflow-hidden flex items-center justify-center">
                <span className="font-bold text-slate-700 text-lg flex flex-col items-center gap-2">
                  Supplier & Partner Integrations
                  <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Coming Soon</span>
                </span>
              </div>
            </div>

            <p className="mt-8 text-center text-orange-600 font-bold text-lg italic tracking-wide border-t border-orange-200/50 pt-6 max-w-md mx-auto opacity-90">
              "A platform that fits your kitchen, not the other way around."
            </p>
          </div>
        </div>
      </section >

      {/* --- TESTIMONIALS --- */}
      < section id="testimonials" className="py-24 bg-slate-900 text-white" >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Built with Chefs. Trusted by Kitchens.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "ChefCode saved us 5 hours a week and 20% less waste - the AI actually understands our flow.",
                author: "Marco",
                role: "Executive Chef"
              },
              {
                text: "The voice assistant is pure magic. No more data entry during service.",
                author: "Sara",
                role: "F&B Manager"
              },
              {
                text: "We went from chaos to calm. ChefCode keeps everything in sync.",
                author: "David",
                role: "Head Chef"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-800 p-10 rounded-[2rem] relative border border-slate-700 hover:border-orange-500/30 transition-colors">
                <div className="text-orange-500 text-6xl font-serif absolute top-6 left-8 opacity-20">"</div>
                <p className="text-slate-300 italic mb-8 relative z-10 text-lg leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center font-bold text-slate-400">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FORM --- */}
      {/* --- CTA FORM --- */}
      <section id="demo-signup" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute -right-40 top-20 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 p-12 md:p-16 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Ready to Cook Smarter?</h2>
              <p className="text-slate-300 mb-10 text-lg relative z-10 leading-relaxed">Join hundreds of restaurants using ChefCode to cut waste, save time, and protect profits.</p>
              <div className="flex items-center gap-3 text-sm text-slate-400 relative z-10 font-bold bg-slate-800 w-fit px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                No credit card needed. Just curiosity.
              </div>
              <p className="mt-8 text-orange-400 font-bold text-lg italic tracking-wide border-t border-slate-700 pt-6 max-w-sm opacity-90">
                "Ready to Cook Smarter?"
              </p>
            </div>

            <div className="md:w-1/2 p-12 md:p-16 bg-white">
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900" placeholder="Chef Marco" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900" placeholder="marco@kitchen.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Restaurant Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900" placeholder="La Trattoria" />
                </div>
                <button type="button" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-400/40 transition-all mt-6 transform hover:-translate-y-1">
                  Book a Demo
                </button>
                <div className="text-center mt-6">
                  <span className="text-slate-400 text-sm font-medium">or</span>
                  <button className="text-slate-600 font-bold text-sm ml-2 hover:text-orange-600 hover:underline transition-colors">Try ChefCode Free</button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER (Dark Anchoring) --- */}
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
                <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dr.AI</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-base">Company</h4>
              <ul className="space-y-4 font-medium">
                <li><Link to="/partners" className="hover:text-orange-500 transition-colors">Partners</Link></li>
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
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
    </div >
  );
};

export default LandingPage;