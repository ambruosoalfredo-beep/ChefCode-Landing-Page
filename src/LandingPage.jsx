import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import videoDemo from './assets/chef-video.webm';
import { motion, AnimatePresence } from 'framer-motion';
import mockup from './assets/mockup.webp';
import mockupStop from './assets/animationstop.png';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

import analyticsDashboard from './assets/interfacciaoffy.png';
import ocrScanImg from './assets/ocr_scan.png';
import {
  Mic,
  ScanLine,
  Database,
  Share2,
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
  MessageSquare,
  User,
  ChevronDown,
  HelpCircle,
  Stethoscope,
  Carrot,
  ChefHat,
  Shield,
  Thermometer,
  Package,
  ClipboardCheck,
  FileCheck
} from 'lucide-react';

const LandingPage = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [analyticsAnimationDone, setAnalyticsAnimationDone] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const animationTimer = useRef(null);

  const startAnimationSequence = () => {
    setAnalyticsAnimationDone(false);
    setAnimationKey(prev => prev + 1); // Force image reload to restart animation
    if (animationTimer.current) clearTimeout(animationTimer.current);
  };

  const handleImageLoad = () => {
    if (animationTimer.current) clearTimeout(animationTimer.current);
    animationTimer.current = setTimeout(() => {
      setAnalyticsAnimationDone(true);
    }, 450);
  };
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Beta form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  // Handle scroll for navbar styling and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
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

  const [activeSection, setActiveSection] = useState('');
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0, opacity: 0 });

  // Update Top Bar Position based on active section
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = document.getElementById(`nav-link-${activeSection}`);
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        setIndicatorProps({
          left: rect.left,
          width: rect.width,
          opacity: 1
        });
      } else {
        // If no section active or active section not in menu (e.g. hero), hide or reset
        setIndicatorProps(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );

    const sections = ['how-it-works', 'features', 'dr-ai', 'testimonials', 'faq', 'demo-signup'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ href, children, scrolled, mobile }) => {
    const sectionId = href.includes('#') ? href.split('#')[1] : '';
    const isActive = sectionId === activeSection && activeSection !== '';
    const isInternalRoute = href.startsWith('/') && !href.includes('#');

    let textColor = scrolled || mobile ? 'text-slate-300' : 'text-slate-300';
    if (isActive) textColor = "text-orange-500 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]";

    const baseClasses = `${mobile ? 'text-lg' : 'text-sm'} ${textColor} hover:text-white font-medium transition-all duration-300 tracking-wide relative`;

    // ID for Top Bar tracking
    const navLinkId = sectionId ? `nav-link-${sectionId}` : undefined;

    const content = (
      <>
        {children}
      </>
    );

    if (isInternalRoute) {
      return (
        <Link
          to={href}
          className={baseClasses}
          onClick={() => setIsMenuOpen(false)}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        id={navLinkId}
        href={href}
        className={baseClasses}
        onClick={() => setIsMenuOpen(false)}
      >
        {content}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">

      {/* --- SYNCHRONIZED TOP BAR INDICATOR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-all duration-300 ease-out rounded-full"
          style={{
            transform: `translateX(${indicatorProps.left}px)`,
            width: `${indicatorProps.width}px`,
            opacity: indicatorProps.opacity
          }}
        />
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-slate-900 py-4 lg:py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
          {/* Link logo to home */}
          <div className="flex items-center gap-2 group cursor-pointer shrink-0">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="ChefCode" className="h-12 md:h-16 lg:h-24 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>
          </div>

          {/* MOBILE PAGE INDICATOR (Absolute Center) */}
          <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <AnimatePresence mode='wait'>
              {activeSection && activeSection !== 'hero' && (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, scale: 0.8, y: 10, backgroundColor: "#f97316" }}
                  animate={{ opacity: 1, scale: 1, y: 0, backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    backgroundColor: { duration: 0.8, ease: "easeOut" }
                  }}
                  className="flex items-center justify-center border border-slate-700/50 px-6 py-2 rounded-full shadow-lg shadow-orange-500/20 backdrop-blur-md whitespace-nowrap"
                >
                  <span className="text-white font-bold text-sm tracking-wide">
                    {activeSection === 'how-it-works' && t('navbar.howItWorks')}
                    {activeSection === 'features' && t('navbar.features')}
                    {activeSection === 'dr-ai' && t('navbar.drAi')}
                    {activeSection === 'testimonials' && t('navbar.testimonials')}
                    {activeSection === 'faq' && t('navbar.faq')}
                    {activeSection === 'demo-signup' && t('navbar.bookDemo')}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/#how-it-works" scrolled={scrolled}>{t('navbar.howItWorks')}</NavLink>
            <NavLink href="/#features" scrolled={scrolled}>{t('navbar.features')}</NavLink>
            <NavLink href="/#dr-ai" scrolled={scrolled}>{t('navbar.drAi')}</NavLink>
            <NavLink href="/#testimonials" scrolled={scrolled}>{t('navbar.testimonials')}</NavLink>
            <NavLink href="/#faq" scrolled={scrolled}>{t('navbar.faq')}</NavLink>
            <NavLink href="/partners" scrolled={scrolled}>{t('navbar.partners')}</NavLink>
            <NavLink href="/about" scrolled={scrolled}>{t('navbar.aboutUs')}</NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              id="nav-link-demo-signup"
              onClick={scrollToDemo}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300 ${activeSection === 'demo-signup' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50 scale-105' : 'bg-white hover:bg-orange-500 hover:text-white text-slate-900'}`}
            >
              {t('navbar.bookDemo')}
            </button>
            <LanguageSwitcher />
          </div>


          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="lg:hidden">
            <LanguageSwitcher mobile={true} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <NavLink href="/#how-it-works" mobile>{t('navbar.howItWorks')}</NavLink>
            <NavLink href="/#features" mobile>{t('navbar.features')}</NavLink>
            <NavLink href="/#dr-ai" mobile>{t('navbar.drAi')}</NavLink>
            <NavLink href="/#testimonials" mobile>{t('navbar.testimonials')}</NavLink>
            <NavLink href="/#faq" mobile>{t('navbar.faq')}</NavLink>
            <NavLink href="/partners" mobile>{t('navbar.partners')}</NavLink>
            <NavLink href="/about" mobile>{t('navbar.aboutUs')}</NavLink>
            <div className="border-t border-slate-700 pt-6 flex flex-col gap-3">
              <button onClick={scrollToDemo} className="btn-aggressive-primary btn-pulse-orange w-full bg-orange-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-orange-900/50">
                {t('navbar.bookDemo')}
              </button>
            </div>
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
      <section className="relative pt-32 pb-24 md:pt-36 lg:pt-44 md:pb-36 overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src={videoDemo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Dynamic Background Effects */}
        {/* Dynamic Background Effects - Optimized for FPS */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[80px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/4 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[60px] opacity-30 pointer-events-none -translate-x-1/4 translate-y-1/4 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-sm font-bold mb-10 shadow-xl hover:scale-105 transition-transform cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span>{t('hero.tagline')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-10 text-white tracking-tighter"
          >
            {t('hero.title')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-gradient-x">
              {t('hero.subtitle')}
            </span>
          </motion.h1>

          {/* AI Act Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-slate-800/60 border border-slate-700 rounded-full backdrop-blur-md hover:bg-slate-800/80 transition-all">
              <BrainCircuit size={20} className="text-orange-400" />
              <span className="text-sm text-slate-300 font-bold uppercase tracking-wider">{t('hero.aiSupport')}</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-emerald-900/60 border border-emerald-700 rounded-full backdrop-blur-md hover:bg-emerald-900/80 transition-all">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="text-sm text-emerald-300 font-bold uppercase tracking-wider">{t('hero.humanApproval')}</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.4
            }}
            className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('hero.description')}

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.6
            }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <button onClick={scrollToDemo} className="btn-aggressive-primary btn-pulse-orange bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 group min-w-[240px] justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">{t('hero.startTrial')}</span>
              <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button onClick={() => setIsVideoOpen(true)} className="btn-aggressive-secondary bg-slate-800/50 border border-slate-700 text-white px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-sm flex items-center gap-2 min-w-[240px] justify-center">
              <Play size={18} fill="currentColor" className="text-white" />
              {t('hero.vision')}
            </button>
          </motion.div>


          {/* Floating Glass Cards Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="border-t border-slate-800/60 pt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { val: "+6%", label: t('hero.stats.netProfit'), desc: t('hero.stats.improvement'), color: "text-emerald-400" },
              { val: "20%", label: t('hero.stats.foodCost'), desc: t('hero.stats.average'), color: "text-orange-400" },
              { val: "10h", label: t('hero.stats.timeSaved'), desc: t('hero.stats.execChefs'), color: "text-blue-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-slate-800/30 border border-slate-700/50 p-3 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center text-center gap-0.5 transition-colors group h-full mx-auto w-full max-w-[220px] md:max-w-none"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className={`text-4xl md:text-5xl font-black ${stat.color} group-hover:scale-110 transition-transform mb-2`}>{stat.val}</div>
                <div>
                  <div className="text-white font-bold leading-tight">{stat.label}</div>
                  <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-slate-500 text-xs mt-6 text-center font-medium"
          >
            {t('hero.disclaimer')}
          </motion.p>


        </div>
      </section>


      {/* --- HOW IT WORKS (Dark Offset) --- */}
      < section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden" >
        {/* Subtle background pattern */}
        < div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]" ></div >



        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center mb-20 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">{t('howItWorks.title')}</h2>
            <p className="text-orange-600 font-bold text-lg tracking-wide uppercase opacity-90">{t('howItWorks.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: <ScanLine className="w-12 h-12 text-white" />,
                title: t('howItWorks.scan.title'),
                desc: t('howItWorks.scan.desc')
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-white" />,
                title: t('howItWorks.track.title'),
                desc: t('howItWorks.track.desc')
              },
              {
                icon: <Layers className="w-12 h-12 text-white" />,
                title: t('howItWorks.plan.title'),
                desc: t('howItWorks.plan.desc')
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: idx * 0.15
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl rotate-0 flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 group-hover:shadow-2xl transition-all duration-500 mb-8 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                  <div className="relative z-10">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* --- ANALYTICS SECTION (Full Width - Light Theme) --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Background Effects removed for consistency */}

        <div className="container mx-auto px-4 md:px-8 relative z-10 group">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">
            {/* Left Col: Text & Content */}
            <div className="text-left flex flex-col items-start">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-orange-600 border border-orange-100">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">{t('analytics.title')}<br /> <span className="text-orange-500">{t('analytics.subtitle')}</span></h3>
              <p className="text-slate-600 mb-8 text-lg font-medium max-w-xl">
                {t('analytics.desc')}
              </p>

              <ul className="flex flex-col gap-4 mb-10 items-start">
                {t('analytics.items').map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-lg group/item justify-start">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 group-hover/item:scale-110 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* KPI Cards Mini */}
              <div className="flex gap-8 justify-start w-full">
                <div className="bg-gradient-to-br from-white to-orange-50 border border-orange-100 p-6 md:p-8 rounded-3xl shadow-xl shadow-orange-500/10 hover:-translate-y-1 transition-transform min-w-[140px]">
                  <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">-12%</div>
                  <div className="text-xs text-orange-600/80 font-bold uppercase tracking-wider">{t('analytics.kpis.waste')}</div>
                </div>
                <div className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-500/10 hover:-translate-y-1 transition-transform min-w-[140px]">
                  <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-2">+8%</div>
                  <div className="text-xs text-emerald-600/80 font-bold uppercase tracking-wider">{t('analytics.kpis.margin')}</div>
                </div>
              </div>

              <p className="text-slate-500 text-xs mt-6 font-medium opacity-70">{t('analytics.disclaimer')}</p>
            </div>

            {/* Right Col: Image Mockup */}
            <motion.div
              className="relative group/image cursor-pointer"
              onViewportEnter={startAnimationSequence}

              viewport={{ once: true }}
            >

              {/* Ghost Iamge (Invisible Layout Anchor) - Defines container size */}
              <img
                src={mockupStop}
                alt=""
                aria-hidden="true"
                className="relative opacity-0 pointer-events-none transform scale-100 transition-transform duration-500 w-full object-contain"
              />

              {/* Animated WebP (Absolute Layer 1 - Always Visible underneath) */}
              <img
                key={animationKey}
                src={mockup}
                onLoad={handleImageLoad}
                alt="ChefCode Analytics Dashboard Animation"
                className={`absolute inset-0 z-20 transform scale-100 transition-transform duration-500 w-full h-full object-contain ${analyticsAnimationDone ? 'invisible' : 'visible'}`}
              />

              {/* Static PNG (Absolute Layer 2 - Appears on top) */}
              <img
                src={mockupStop}
                alt="ChefCode Analytics Dashboard Static"
                className={`absolute inset-0 z-30 transform scale-100 transition-transform duration-500 w-full h-full object-contain ${analyticsAnimationDone ? 'visible' : 'invisible'}`}
              />

              <p className="mt-20 text-center text-orange-600 font-bold text-2xl italic tracking-wide opacity-90">
                {t('analytics.quote')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>





      {/* --- HYBRID AI SECTION (Dark & Powerful) --- */}
      {/* --- SHOWCASE SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 mb-24 mt-12 hidden"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-500/10 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 pt-12 md:pt-20 text-center">

            {/* Text Content with Padding */}
            <div className="px-6 md:px-20">
              <h3 className="text-white text-3xl md:text-5xl font-black mb-6 leading-tight">
                {t('showcase.title')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">{t('showcase.subtitle')}</span>
              </h3>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">{t('showcase.desc')}</p>
            </div>

            {/* Image Touching Edges (Full Width) */}
            <div className="w-full px-0">
              <img
                src={analyticsDashboard}
                alt="ChefCode Dashboard Interface"
                className="w-full h-auto shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700 hover:shadow-orange-500/10"
              />
            </div>
          </div>
        </div>
      </motion.div>

      < motion.section
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.8 }}
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
                {t('features.voice')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-white">
                {t('features.title')} <br />
                <span className="text-slate-500">{t('features.subtitle')}</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                ChefCode uses a hybrid AI engine.
                <strong className="text-white bg-slate-800 px-2 py-0.5 rounded mx-1 border border-slate-700">{t('features.hybridEngine.local')}</strong> &
                <strong className="text-white bg-slate-800 px-2 py-0.5 rounded mx-1 border border-slate-700">{t('features.hybridEngine.cloud')}</strong>
              </p>

              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Zap size={20} /></div>
                  {t('features.hybridEngine.title')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-medium"><strong>{t('features.hybridEngine.local')}</strong> {t('features.hybridEngine.localDesc')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-medium"><strong>{t('features.hybridEngine.cloud')}</strong> {t('features.hybridEngine.cloudDesc')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 pt-2 border-t border-slate-700/50">
                    <span className="font-medium text-white">{t('features.hybridEngine.summary')}</span>
                  </li>
                </ul>
              </div>

              {/* GDPR Voice Privacy Notice */}
              <div className="mt-8 p-6 bg-slate-800/80 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:border-emerald-600/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-2 flex items-center gap-2 flex-wrap">
                      {t('features.privacy.title')}
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">{t('features.privacy.gdpr')}</span>
                    </h5>
                    <p className="text-slate-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: t('features.privacy.desc') }} />
                  </div>
                </div>
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
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('features.listening')}</span>
                    </div>
                    <div className="px-3 py-1 bg-slate-900 rounded-full text-xs font-bold text-slate-500 border border-slate-700/50">{t('features.offline')}</div>
                  </div>

                  <div className="space-y-8">
                    {/* Chef Input Bubble */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center shrink-0 border border-slate-600 shadow-sm">
                        <ChefHat size={24} className="text-slate-400" />
                      </div>
                      <div className="bg-slate-700 p-5 rounded-3xl rounded-tl-none text-slate-200 text-base font-medium shadow-sm border border-slate-600/50">
                        "{t('features.example.input')}"
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
                          <span className="font-bold text-slate-900">{t('features.processed')}</span>
                        </div>

                        {/* Styled Data Cards */}
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">P</div>
                              <div>
                                <div className="text-xs text-slate-400 font-bold uppercase">{t('features.example.item')}</div>
                                <div className="font-bold text-slate-800">{t('features.example.product1')}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-400 font-bold uppercase">{t('features.example.qty')}</div>
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
                                <div className="text-xs text-slate-400 font-bold uppercase">{t('features.example.item')}</div>
                                <div className="font-bold text-slate-800">{t('features.example.product2')}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-400 font-bold uppercase">{t('features.example.qty')}</div>
                              <div className="font-bold text-emerald-600">+ 5 L</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center font-bold text-white text-lg">
                  {t('features.handsFull')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section >

      {/* --- FEATURE: OCR (Full Width Centered) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 mx-auto mb-8 text-orange-600 border border-slate-100">
              <FileText size={32} />
            </div>

            <h3 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">{t('ocr.title')}</h3>
            <h4 className="text-xl md:text-2xl font-bold text-orange-600 mb-6">{t('ocr.subtitle')}</h4>

            <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
              {t('ocr.desc')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {t('ocr.items').map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-slate-700 font-bold">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 font-bold italic mb-12 max-w-2xl mx-auto opacity-80">
              {t('ocr.quote')}
            </p>

            {/* Large Visual Element for OCR */}
            {/* Large Visual Element for OCR */}
            <div className="relative rounded-3xl max-w-4xl mx-auto group">
              <div className="absolute inset-0 bg-orange-100/50 rounded-3xl transform rotate-1 scale-[1.02] -z-10 group-hover:rotate-2 transition-transform duration-500"></div>
              <img src={ocrScanImg} alt="AI OCR Scan" className="w-full h-auto rounded-3xl shadow-2xl" />

              <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-orange-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <ScanLine size={28} />
                <span className="font-bold text-sm hidden md:inline-block">AI Processing Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE: POS (Full Width Dark) --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          {/* Feature 2: POS - Dark Elegant Card - Now Full Width Wrapper */}

          {/* OCR Content Removed from here effectively by previous chunk replacement structure - clean up opening grid div */}

          {/* Feature 2: POS - Now Full Width Centered Dark */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden group border border-slate-800 bg-slate-950/50 backdrop-blur"
          >
            {/* Abstract decorative graphic */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-bl-full opacity-80 -mr-20 -mt-20 group-hover:scale-105 transition-transform duration-700"></div>

            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner mb-8 text-orange-400 relative z-10 border border-slate-700">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white relative z-10">{t('pos.title')}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed relative z-10 font-medium">{t('pos.desc')}</p>

            <ul className="space-y-2 mb-8 text-slate-300 font-medium">
              {t('pos.items').map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 backdrop-blur-md relative z-10 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-300">{t('pos.analysis')}</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full uppercase tracking-wide font-bold">{t('pos.liveData')}</span>
              </div>
              {/* Mockup Chart Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5 text-slate-400 font-semibold">
                    <span>{t('pos.example.burger')}</span>
                    <span className="text-white">72% {t('pos.example.margin')}</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[72%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5 text-slate-400 font-semibold">
                    <span>{t('pos.example.pasta')}</span>
                    <span className="text-white">64% {t('pos.example.margin')}</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[64%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-orange-400 font-bold text-lg tracking-wide uppercase opacity-90 text-center border-t border-slate-800 pt-6">
              "{t('pos.quote')}"
            </p>
          </motion.div>
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
                      <h4 className="font-bold text-slate-900 text-lg">{t('prep.morningPrep')}</h4>

                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { item: t('prep.tasks.onion'), qty: t('prep.quantities.onion'), status: 'done' },
                      { item: t('prep.tasks.chicken'), qty: t('prep.quantities.chicken'), status: 'pending' },
                      { item: t('prep.tasks.salad'), qty: t('prep.quantities.salad'), status: 'pending' },
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

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">{t('prep.title')}<br /><span className="text-orange-600">{t('prep.subtitle')}</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                {t('prep.desc')}
                <br /><br />
                <span className="text-slate-800 font-bold">{t('prep.highlight')}</span>
              </p>
              <ul className="space-y-3 mb-8">
                {t('prep.items').map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 font-bold italic border-l-4 border-orange-500 pl-4">
                {t('prep.quote')}
              </p>
            </div>
          </div>


        </div>
      </section >

      {/* HACCP SECTION */}
      < section className="bg-white px-4 md:px-8 py-24" >
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white text-center relative overflow-hidden shadow-2xl max-w-7xl mx-auto border border-slate-800">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-orange-900/20 rounded-full blur-3xl -z-10 -mt-40"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-orange-500/30">
              <ShieldCheck size={40} className="text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">{t('haccp.title')} <br />{t('haccp.subtitle')}</h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              {t('haccp.desc')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
              {[
                { icon: Thermometer, text: t('haccp.items.log') },
                { icon: Package, text: t('haccp.items.trace') },
                { icon: ClipboardCheck, text: t('haccp.items.checklist') },
                { icon: FileCheck, text: t('haccp.items.audit') }
              ].map((item, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-300 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default flex items-center gap-3">
                  <item.icon size={16} className="text-slate-400" />
                  <span>{item.text}</span>
                  <CheckCircle2 size={16} className="text-emerald-500" />
                </span>
              ))}
              <Link to="/coming-soon" className="px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 border-dashed rounded-full text-sm font-bold text-orange-400 backdrop-blur-md hover:bg-orange-500/20 transition-all hover:scale-105 cursor-pointer flex items-center gap-2 group">
                <Database size={14} className="text-orange-500" />
                {t('haccp.blockchain')}
                <span className="ml-1 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                  {t('haccp.comingSoon')} <ArrowRight size={10} />
                </span>
              </Link>
            </div>

            <p className="mt-12 text-center text-white font-bold text-xl italic tracking-wide border-t border-orange-500/30 pt-8 max-w-md mx-auto opacity-90">
              {t('haccp.quote')}
            </p>

            <div className="mt-10 flex justify-center">
              <Link to="/haccp" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                {t('haccp.button')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* --- DR. AI (Modern Card Style - Pop-up Effect) --- */}
      < section id="dr-ai" className="py-24 bg-white" >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">{t('drAi.title')} <br /> <span className="text-orange-600">{t('drAi.subtitle')}</span></h2>
            <p className="text-xl text-slate-600 font-medium">
              {t('drAi.desc')}
            </p>

            {/* AI Act Transparency Disclaimer */}
            <div className="max-w-2xl mx-auto mt-8 p-8 bg-gradient-to-br from-slate-50 to-orange-50/30 border border-orange-200/40 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform">
                  <BrainCircuit size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h5 className="text-slate-900 font-bold text-base mb-2">{t('drAi.decisionSupport')}</h5>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                    {t('drAi.decisionDesc')}
                  </p>
                </div>
              </div>
            </div>
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
              <h4 className="text-2xl font-bold mb-3 text-slate-900">{t('drAi.cards.smart.title')}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{t('drAi.cards.smart.desc')}</p>
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
              <h4 className="text-2xl font-bold mb-3 text-slate-900">{t('drAi.cards.profit.title')}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{t('drAi.cards.profit.desc')}</p>
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
              <h4 className="text-2xl font-bold mb-3 text-slate-900">{t('drAi.cards.safety.title')}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{t('drAi.cards.safety.desc')}</p>
            </motion.div>
          </div>

          {/* CRITICAL: Allergen Safety Legal Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto p-10 bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/20 border-2 border-red-200/50 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Icona AI + Shield */}
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/40 hover:scale-105 transition-transform">
                  <ShieldCheck size={36} className="text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Contenuto */}
              <div className="max-w-xl">
                <h5 className="text-slate-900 font-black text-xl mb-4">{t('drAi.safetyDisclaimer.title')}</h5>
                <p className="text-slate-700 text-base leading-relaxed">
                  {t('drAi.safetyDisclaimer.desc')}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-orange-600 font-bold text-xl italic tracking-wide border-t border-orange-200/50 pt-8 max-w-md mx-auto opacity-90">
            {t('drAi.quote')}
          </p>
        </div>
      </section >



      {/* --- ANALYTICS SECTION --- */}



      {/* --- INTEGRATIONS SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">{t('integrations.title')}<br /> {t('integrations.subtitle')}</h2>
          <p className="text-slate-600 mb-16 text-lg max-w-3xl mx-auto">
            {t('integrations.desc')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-10 bg-gradient-to-br from-white to-blue-50 border border-blue-100/50 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all flex flex-col items-center justify-center h-full group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
              <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-3xl mb-6 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <ScanLine size={48} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-slate-800 text-xl relative z-10">{t('integrations.pos')}</span>
            </div>
            <div className="p-10 bg-gradient-to-br from-white to-emerald-50 border border-emerald-100/50 rounded-[2rem] shadow-lg shadow-emerald-900/5 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all flex flex-col items-center justify-center h-full group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
              <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-3xl mb-6 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Database size={48} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-slate-800 text-xl text-center relative z-10">{t('integrations.erp')}</span>
            </div>
            <Link to="/coming-soon" className="p-10 bg-gradient-to-br from-white to-orange-50 border border-orange-200/50 rounded-[2rem] shadow-lg shadow-orange-900/5 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all flex flex-col items-center justify-center h-full group backdrop-blur-sm relative overflow-hidden cursor-pointer block">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 opacity-50" />
              <span className="absolute top-6 right-6 px-3 py-1 bg-orange-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-orange-500/20 z-20">{t('haccp.comingSoon')}</span>
              <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-3xl mb-6 flex items-center justify-center text-orange-500 shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Share2 size={48} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-slate-800 text-xl transition-colors text-center relative z-10">{t('integrations.supplier')}</span>
              <div className="mt-6 bg-white border border-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all z-20">
                {t('integrations.viewFeature')} <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">{t('testimonials.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: t('testimonials.flavio.text'),
                author: "Flavio",
                role: t('testimonials.flavio.role'),
                icon: Stethoscope
              },
              {
                text: t('testimonials.maria.text'),
                author: "Maria",
                role: t('testimonials.maria.role'),
                icon: Carrot
              },
              {
                text: t('testimonials.carla.text'),
                author: "Carla",
                role: t('testimonials.carla.role'),
                icon: ChefHat
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-800 p-10 rounded-[2rem] relative border border-slate-700 hover:border-orange-500/30 transition-colors flex flex-col h-full">
                <div className="text-orange-500 text-6xl font-serif absolute top-6 left-8 opacity-20">"</div>
                <p className="text-slate-300 italic mb-8 relative z-10 text-lg leading-relaxed flex-grow">{t.text}</p>

                {/* Icon and name inside box with border-top */}
                <div className="border-t border-slate-700 pt-6 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <t.icon className="text-white" size={48} strokeWidth={2} />
                  </div>
                  <div className="font-bold text-white text-xl text-center">{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* --- FAQ ACCORDION SECTION --- */}
      <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t('faq.title')}</h2>
            <p className="text-slate-600 text-lg font-medium">{t('faq.subtitle')}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {t('faq.items').map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: idx * 0.1
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{faq.q}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ${openFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-slate-600 leading-relaxed pl-16">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">{t('contact.questions')}</p>
            <a href="#demo-signup" className="text-orange-600 font-bold hover:underline text-lg">
              {t('contact.button')} →
            </a>
          </div>
        </div>
      </section >



      {/* --- COMING SOON TEASER --- */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">{t('future.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            {t('future.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg hover:border-emerald-500/50 transition-colors">
              <ShieldCheck className="text-emerald-500 shrink-0" size={20} />
              <span className="font-bold text-slate-200 text-sm md:text-base">{t('future.blockchain')}</span>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg hover:border-orange-500/50 transition-colors">
              <ShoppingBasket className="text-orange-500 shrink-0" size={20} />
              <span className="font-bold text-slate-200 text-sm md:text-base">{t('future.marketplace')}</span>
            </div>
          </div>

          <Link to="/coming-soon" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl hover:shadow-blue-500/25">
            {t('future.button')} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section id="demo-signup" className="py-24 bg-slate-50 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 p-12 md:p-16 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">{t('contact.title')}</h2>
            <ul className="text-slate-300 mb-10 text-lg relative z-10 leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                <span><span className="text-orange-500 font-bold">{t('contact.beta')}</span> {t('contact.beta2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                <span>{t('contact.questions')}</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 text-sm text-slate-400 relative z-10 font-bold bg-slate-800 w-fit px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              {t('contact.noCard')}
            </div>
            <p className="mt-8 text-orange-400 font-bold text-lg italic tracking-wide border-t border-slate-700 pt-6 max-w-sm opacity-90">
              {t('contact.quote')}
            </p>
          </div>

          <div className="md:w-1/2 p-12 md:p-16 bg-white">
            <form className="space-y-5" onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus({ loading: true, success: false, error: false });

              try {
                const response = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    access_key: 'bb65b8a8-c554-46d6-bf6c-8e57bcb0b629',
                    name: formData.name,
                    email: formData.email,
                    restaurant: formData.restaurant,
                    message: formData.message || 'No message provided',
                    subject: 'New Beta Sign-up - ChefCode'
                  })
                });

                if (response.ok) {
                  setFormStatus({ loading: false, success: true, error: false });
                  setFormData({ name: '', email: '', restaurant: '', message: '' });
                } else {
                  setFormStatus({ loading: false, success: false, error: true });
                }
              } catch (error) {
                setFormStatus({ loading: false, success: false, error: true });
              }
            }}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('contact.form.name')} <span className="text-orange-600">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('contact.form.email')} <span className="text-orange-600">*</span></label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                  placeholder={t('contact.form.placeholder.email')}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('contact.form.restaurant')} <span className="text-orange-600">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.restaurant}
                  onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                  placeholder={t('contact.form.placeholder.restaurant')}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('contact.form.message')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900 resize-none"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              {formStatus.success && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl font-medium text-sm">
                  {t('contact.form.success')}
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl font-medium text-sm">
                  {t('contact.form.error')}
                </div>
              )}

              {/* GDPR Consent */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                  id="gdpr-consent"
                />
                <label htmlFor="gdpr-consent" className="text-xs text-slate-600 leading-relaxed">
                  {t('contact.form.consent')} <Link to="/privacy" className="text-orange-600 font-bold hover:underline">{t('contact.form.consentLink')}</Link> {t('contact.form.consent2')} <span className="text-orange-600">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="btn-aggressive-primary w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-400/40 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.loading ? t('contact.form.sending') : t('contact.form.button')}
              </button>
              <div className="text-center mt-6">
                <span className="text-slate-400 text-sm font-medium">{t('contact.form.or')}</span>
                <button type="button" onClick={() => setIsVideoOpen(true)} className="text-slate-600 font-bold text-sm ml-2 hover:text-orange-600 hover:underline transition-colors">{t('contact.form.watch')}</button>
              </div>
            </form>
          </div>
        </motion.div>
      </section >

      {/* --- FOOTER (Dark Anchoring) --- */}
      < footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-sm text-slate-500" >
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
                <li><a href="#features" className="hover:text-orange-500 transition-colors">{t('navbar.features')}</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-500 transition-colors">{t('navbar.howItWorks')}</a></li>
                <li><a href="#dr-ai" className="hover:text-orange-500 transition-colors">{t('navbar.drAi')}</a></li>
                <li><a href="#faq" className="hover:text-orange-500 transition-colors">{t('navbar.faq')}</a></li>
                <li><a href="#integrations" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.integrations')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-base">{t('aboutUs.footer.company')}</h4>
              <ul className="space-y-4 font-medium">
                <li><Link to="/partners" className="hover:text-orange-500 transition-colors">{t('navbar.partners')}</Link></li>
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">{t('navbar.aboutUs')}</Link></li>
                <li><a href="#demo-signup" className="hover:text-orange-500 transition-colors">{t('aboutUs.footer.contact')}</a></li>
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

export default LandingPage;