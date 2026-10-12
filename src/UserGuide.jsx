import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  CheckCircle2,
  Clock,
  Play, 
  Rocket, 
  User, 
  Bot, 
  AlertTriangle,
  ShieldAlert,
  Bug,
  Calendar,
  Lock,
  Search,
  MessageSquare,
  Shield,
  Book,
  ClipboardCheck,
  Users,
  ChefHat,
  ConciergeBell,
  UtensilsCrossed,
  Briefcase,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import videoDemo from './assets/sign_in_opt.webm';
import ocrExtractionVideo from './assets/ocr_extraction.webm';
import addIngredientVideo from './assets/add_ingredient.webm';
import addRecipeVideo from './assets/add_recipe.webm';
import mappingIngredientVideo from './assets/mapping_ingredient.webm';
import taskVideo from './assets/task.webm';
import singleSalesVideo from './assets/single_sales.webm';
import massImportVideo from './assets/mass_import.webm';
import kitchenDashboardVideo from './assets/kitchen_dashboard.webm';
import managementDashboardVideo from './assets/management_dashboard.webm';
import shoppingVideo from './assets/shopping.webm';
import validateOrderVideo from './assets/validate_order.webm';
import aiVoiceVideo from './assets/ai_voice_flow_v3.webm';
import aiAssistantAddIngredientVideo from './assets/aiassistant_add_ingredient.webm';
import aiAssistantAddProductionVideo from './assets/aiassistant_add_production.webm';
import aiAssistantManagementVideo from './assets/aiassistant_management.webm';
import ocrScanImg from './assets/ocr_scan.png';
import guideImg1 from './assets/user_guide_3.jpeg';
import guideImg2 from './assets/user_guide_2.jpeg';
import guideImg3 from './assets/user_guide 1.jpeg';

const StepItem = ({ step, index, activeIndex, setActiveIndex, setIsVideoOpen, setActiveVideoUrl }) => {
  const isActive = activeIndex === index;
  const itemRef = useRef(null);

  const handleToggle = () => {
    const willOpen = !isActive;
    setActiveIndex(willOpen ? index : null);
    if (willOpen) {
      setTimeout(() => {
        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 180);
    }
  };

  return (
    <div 
      ref={itemRef}
      className={`bg-white border transition-all duration-500 transform overflow-hidden group cursor-pointer ${
        isActive 
          ? 'border-slate-200 border-l-[6px] border-l-slate-900 shadow-2xl scale-[1.01] rounded-[1.5rem]' 
          : 'border-slate-200 rounded-2xl hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1'
      }`}
    >
      <div 
        className="p-5 md:p-8 flex items-start gap-5"
        onClick={handleToggle}
      >
        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold transition-all duration-300 shadow-sm ${isActive ? 'bg-orange-500 text-white shadow-orange-500/30' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
          {index + 1}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mt-1 gap-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h4 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-orange-600'}`}>
                {step?.title}
              </h4>
              {step?.hasVideo ? (
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-orange-500/30'
                    : 'bg-orange-50 text-orange-600 border border-orange-200/80 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 group-hover:shadow-md group-hover:shadow-orange-500/25 group-hover:scale-105'
                }`}>
                  <Play className="w-3 h-3 fill-current transition-transform duration-300 group-hover:scale-110" />
                  <span>{step.twoWideVideos || step.videoSrc2 !== undefined ? '2 Videos' : 'Video Demo'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-100 border border-slate-200/60">
                  Guide
                </span>
              )}
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
              isActive ? 'bg-orange-50 text-orange-500' : 'bg-slate-100 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500'
            }`}>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`} 
              />
            </div>
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-slate-600 mt-3 mb-6 text-lg leading-relaxed">
                  {step?.content}
                </p>
                {step?.hasVideo ? (
                  (step?.videoSrc2 !== undefined || step?.twoWideVideos) ? (
                    <div className="w-full mt-10 mb-6 flex flex-col md:flex-row items-center justify-center gap-6">
                      <motion.div 
                        initial={{ opacity: 0, x: -50, rotate: -3 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setActiveVideoUrl(step.videoSrc);
                          setIsVideoOpen(true); 
                        }}
                        className={`relative w-full ${step.twoWideVideos ? 'md:w-[48%]' : 'md:w-[30%]'} rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-10 hover:z-30 transition-all duration-300 cursor-pointer group/vid1`}
                      >
                         {step.videoSrc ? (
                           <video 
                             src={step.videoSrc} 
                             onTimeUpdate={(e) => {
                               if (step.loopAt && e.target.currentTime >= step.loopAt) {
                                 e.target.currentTime = 0;
                                 e.target.play().catch(() => {});
                               }
                             }}
                             className={`w-full h-auto object-cover transition-transform duration-500 ${step.twoWideVideos ? 'aspect-[16/9] group-hover/vid1:scale-105' : 'aspect-[9/16] group-hover/vid1:scale-105'}`} 
                             autoPlay 
                             muted 
                             loop 
                             playsInline 
                           />
                         ) : (
                           <div className="w-full aspect-[16/9] bg-slate-100 flex flex-col items-center justify-center">
                             <Play className="w-12 h-12 text-slate-300 mb-2" />
                             <span className="text-sm font-medium text-slate-400">Video in arrivo...</span>
                           </div>
                         )}
                         <div className="absolute inset-0 bg-black/10 group-hover/vid1:bg-black/30 transition-colors flex items-center justify-center">
                           <div className="bg-orange-500 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform group-hover/vid1:scale-110 transition-transform"><Play className="w-6 h-6 fill-white ml-1" /></div>
                         </div>
                         <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">{step.vid1Label || "OCR Scanner"}</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: 50, rotate: 3 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.2 }}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setActiveVideoUrl(step.videoSrc2);
                          setIsVideoOpen(true); 
                        }}
                        className={`relative w-full ${step.twoWideVideos ? 'md:w-[48%]' : 'md:w-[65%]'} rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-20 hover:z-30 transition-all duration-300 cursor-pointer group/vid2`}
                      >
                         {step.videoSrc2 ? (
                           <video src={step.videoSrc2} className="w-full h-auto aspect-[16/9] object-cover group-hover/vid2:scale-105 transition-transform duration-500" autoPlay muted loop playsInline />
                         ) : (
                           <div className="w-full aspect-[16/9] bg-slate-100 flex flex-col items-center justify-center">
                             <Play className="w-12 h-12 text-slate-300 mb-2" />
                             <span className="text-sm font-medium text-slate-400">Video in arrivo...</span>
                           </div>
                         )}
                         <div className="absolute inset-0 bg-black/10 group-hover/vid2:bg-black/30 transition-colors flex items-center justify-center">
                           <div className="bg-orange-500 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform group-hover/vid2:scale-110 transition-transform"><Play className="w-6 h-6 fill-white ml-1" /></div>
                         </div>
                         <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">{step.vid2Label || "Manual Entry"}</div>
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.25 }}
                      className="relative mt-6 mb-4 w-full rounded-3xl overflow-hidden cursor-pointer group/video shadow-2xl border-4 border-slate-700/50 bg-slate-900 z-10 hover:z-20 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideoUrl(step.videoSrc);
                        setIsVideoOpen(true);
                      }}
                    >
                      {/* Inline Video Preview */}
                      {step?.videoSrc ? (
                        <video 
                          src={step.videoSrc} 
                          className="w-full h-auto aspect-[16/9] object-cover group-hover/video:scale-105 transition-transform duration-700"
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                        />
                      ) : (
                        <div className="w-full aspect-[16/9] bg-slate-100 flex flex-col items-center justify-center group-hover/video:bg-slate-200 transition-colors">
                          <Play className="w-12 h-12 text-slate-300 mb-2" />
                          <span className="text-sm font-medium text-slate-400">Video in arrivo...</span>
                        </div>
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                        <div className="bg-orange-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform group-hover/video:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-white ml-1" />
                        </div>
                      </div>

                      {/* Optional Badge if provided */}
                      {step?.vid1Label && (
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                          {step.vid1Label}
                        </div>
                      )}
                    </motion.div>
                  )
                ) : step?.linkToSection ? (
                  <div className="mt-4 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById(step.linkToSection);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-200/80 hover:border-orange-500 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group/btn"
                    >
                      <Bug className="w-4 h-4 text-orange-500 group-hover/btn:text-white transition-colors" />
                      <span>{step.linkLabel || "Guida Feedback & Bug"}</span>
                      <span className="text-orange-400 group-hover/btn:text-white transition-transform group-hover/btn:translate-y-0.5">↓</span>
                    </button>
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const VideoDisplay = ({ videoUrl, stepTitle, onClose }) => {
  const videoRef = useRef(null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8" onClick={onClose}>
      <div 
        className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl ring-4 ring-slate-700/50 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {videoUrl ? (
          <video 
            ref={videoRef}
            key={videoUrl} // force re-mount on src change
            src={videoUrl} 
            className="w-full h-full object-contain origin-center bg-black"
            autoPlay 
            controls
            playsInline
            loop
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
            <Play className="w-20 h-20 mb-4 text-orange-500 opacity-80 transition-all duration-300" />
            <span className="text-2xl font-medium text-white mb-2">Video/GIF Placeholder</span>
            <span className="text-lg opacity-70">Mostrerà il task: "{stepTitle}"</span>
          </div>
        )}

        {/* Close Button Inside Video Overlay */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const UserGuide = () => {
  const { t, language } = useLanguage();
  const [activeManualFlow, setActiveManualFlow] = useState(null);
  const [activeAIFlow, setActiveAIFlow] = useState(null);
  
  // Aggiunto stato per la modale video (overlay)
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [currentFlow, setCurrentFlow] = useState('manual'); // 'manual' or 'ai'

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Navbar & Scroll state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('quick-start');
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Top Bar Position based on active section
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = document.getElementById(`guide-nav-${activeSection}`);
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        setIndicatorProps({
          left: rect.left,
          width: rect.width,
          opacity: 1
        });
      } else {
        setIndicatorProps(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  // Observe sections for active section highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-15% 0px -40% 0px" }
    );

    const sections = ['quick-start', 'what-to-test', 'suggested-tests', 'guardrails', 'feedback-bugs', 'timeline'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ id, label, mobile }) => {
    const isActive = activeSection === id;
    let textColor = isActive ? "text-orange-500 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" : "text-slate-300 hover:text-white font-medium";
    const baseClasses = `${mobile ? 'text-lg py-1' : 'text-xs xl:text-sm'} ${textColor} transition-all duration-300 tracking-wide cursor-pointer select-none whitespace-nowrap`;
    return (
      <a
        id={`guide-nav-${id}`}
        href={`#${id}`}
        className={baseClasses}
        onClick={(e) => scrollToSection(e, id)}
      >
        {label}
      </a>
    );
  };

  const manualFlowSteps = [
    { title: "Sign in and select Role", content: "Sign in and select the Chef or F&B Manager role.", hasVideo: true, videoSrc: videoDemo },
    { title: "Add Inventory Ingredients", content: "Add ingredients manually or use the OCR Scanner to upload an invoice for massive and automatic insertion.", hasVideo: true, videoSrc: ocrExtractionVideo, videoSrc2: addIngredientVideo, loopAt: 11.90 },
    { title: "Create Prepared or Semi-Prepared Recipe", content: "Create recipes for your menu. A Semi-Prepared recipe is a base preparation (e.g., Mayonnaise, Ragù) that can be reused as an ingredient in other recipes. A Prepared recipe is the final finished dish served to the customer.", hasVideo: true, videoSrc: addRecipeVideo },
    { title: "Map Ingredients & Review", content: "Link generic recipe ingredients (e.g., 'pork fillet') to your actual inventory items to calculate costs. This is only needed if the names differ; otherwise, it's automatic. Then, review yield, cost, allergens, and selling price.", hasVideo: true, videoSrc: mappingIngredientVideo },
    { title: "Create Production & Operational Tasks", content: "Create Production Tasks to generate finished items (deducting ingredients automatically) or Operational Tasks (e.g., 'change fryer oil') to deduct specific items. Finished products are added to your stock and deducted upon sales.", hasVideo: true, videoSrc: taskVideo },
    { title: "Record Sales & Mass Import", content: "Choose between two methods to record your sales: Single Sale for real-time POS-style entry, or Mass Import to download a CSV template, enter sold quantities, and re-upload to register all sales at once.", hasVideo: true, videoSrc: singleSalesVideo, videoSrc2: massImportVideo, twoWideVideos: true, vid1Label: "Single Sale", vid2Label: "Massive Import" },
    { title: "Review Dashboards", content: "Explore two specialized dashboards: the Management Dashboard for F&B Managers (tracking revenue, margins, and profits) and the Kitchen Dashboard for Chefs (featuring menu engineering, most/least sold dishes, and critical stock alerts).", hasVideo: true, videoSrc: kitchenDashboardVideo, videoSrc2: managementDashboardVideo, twoWideVideos: true, vid1Label: "Kitchen Dashboard", vid2Label: "Management Dashboard" },
    { title: "Simulate a Purchase", content: "As sales and production deduct ingredients from your inventory, any items falling below their Safety Stock threshold are automatically added to your Shopping List. You can manually add extra items and seamlessly export the final list—either consolidated or grouped by supplier—ready for purchasing.", hasVideo: true, videoSrc: shoppingVideo },
    { title: "Goods In & Validate Order", content: "When goods arrive, find them in Pending Orders and validate the receipt manually or by scanning the delivery note with OCR. If there are any inconsistencies between what was ordered and what was delivered, the system will automatically flag them with alerts.", hasVideo: true, videoSrc: validateOrderVideo },
  ];

  const aiFlowSteps = [
    { 
      title: language === 'it' ? "Ripeti le Azioni Manuali" : "Repeat Manually Completed Actions", 
      content: language === 'it'
        ? "Utilizza l'Assistente AI per registrare rapidamente ingredienti e avviare task di produzione in pochi secondi."
        : "Use the AI Assistant to log ingredients and trigger production tasks in seconds.", 
      hasVideo: true,
      videoSrc: aiAssistantAddIngredientVideo,
      videoSrc2: aiAssistantAddProductionVideo,
      twoWideVideos: true,
      vid1Label: language === 'it' ? "Aggiungi Ingrediente" : "Add Ingredient",
      vid2Label: language === 'it' ? "Crea Produzione" : "Add Production"
    },
    { 
      title: language === 'it' ? "Chiedi Approfondimenti all'AI" : "Ask AI for Insights", 
      content: language === 'it'
        ? "Interroga l'AI su inventario, ricette, costi, risultati di vendita o dashboard e confronta le risposte con le schermate dell'app."
        : "Ask the AI about inventory, recipes, costs, sales results, dashboards, or tasks and compare the answer with the platform pages.", 
      hasVideo: true,
      videoSrc: aiAssistantManagementVideo,
      vid1Label: language === 'it' ? "AI Management Insights" : "AI Management Insights"
    },
    { 
      title: language === 'it' ? "Usa l'Assistente Vocale" : "Use Voice Assistant", 
      content: language === 'it'
        ? "Con l'Assistente Vocale puoi gestire la cucina e consultare la piattaforma a mani libere. Pronuncia comandi vocali per inserire ingredienti e avviare produzioni, oppure chiedi informazioni in tempo reale su scorte, costi e dashboard di gestione."
        : "Use the hands-free Voice Assistant to manage kitchen operations and consult your data. Simply speak to log ingredients and trigger production tasks, or ask for real-time insights on stock levels, food costs, and management dashboards.", 
      hasVideo: true, 
      videoSrc: aiVoiceVideo 
    },
    { 
      title: language === 'it' ? "Verifica e Conferma" : "Verify and Confirm", 
      content: language === 'it'
        ? "Ogni volta che l'AI propone una modifica ai dati, dovrai confermarla prima che venga applicata. Prova sia ad annullare che a confermare."
        : "Whenever the AI Assistant proposes a data-changing action, you must confirm it before it applies. Test cancelling as well as confirming.", 
      hasVideo: false 
    },
    { 
      title: language === 'it' ? "Segnala Feedback" : "Report Feedback", 
      content: language === 'it'
        ? "Invia subito una segnalazione direttamente dall'app per qualsiasi anomalia, dato inatteso o suggerimento di miglioramento riscontrato durante il test."
        : "Report any unexpected behavior, missing data, or improvement suggestion directly through the Send Feedback button in the app.", 
      hasVideo: false,
      linkToSection: "feedback-bugs",
      linkLabel: language === 'it' ? "Consulta la guida Feedback & Bug" : "How to Report Feedback & Bugs"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-slate-900 py-4 lg:py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative min-h-[56px]">
          
          {/* Mobile Menu Toggle (Left on mobile, hidden on desktop) */}
          <div className="lg:hidden flex justify-start items-center">
            <button className="p-2 -ml-2 text-white hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Logo (Center on mobile, Left on desktop) */}
          <div className="flex justify-center lg:justify-start items-center group cursor-pointer shrink-0">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="ChefCode" className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>
          </div>

          {/* Desktop Menu (Center) */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-4">
            <NavLink id="quick-start" label={t('navbar.guideNavbar.quickStart')} />
            <NavLink id="what-to-test" label={t('navbar.guideNavbar.whatToTest')} />
            <NavLink id="suggested-tests" label={t('navbar.guideNavbar.suggestedTests')} />
            <NavLink id="guardrails" label={t('navbar.guideNavbar.guardrails')} />
            <NavLink id="feedback-bugs" label={t('navbar.guideNavbar.feedbackBugs')} />
            <NavLink id="timeline" label={t('navbar.guideNavbar.timeline')} />
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center justify-end gap-4 shrink-0">
            <Link to="/">
              <button className="px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 bg-white hover:bg-orange-500 hover:text-white text-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                {t('navbar.backToHome')}
              </button>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Right Side: LanguageSwitcher */}
          <div className="lg:hidden flex justify-end items-center">
            <LanguageSwitcher mobile={true} />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
            <NavLink id="quick-start" label={t('navbar.guideNavbar.quickStart')} mobile />
            <NavLink id="what-to-test" label={t('navbar.guideNavbar.whatToTest')} mobile />
            <NavLink id="suggested-tests" label={t('navbar.guideNavbar.suggestedTests')} mobile />
            <NavLink id="guardrails" label={t('navbar.guideNavbar.guardrails')} mobile />
            <NavLink id="feedback-bugs" label={t('navbar.guideNavbar.feedbackBugs')} mobile />
            <NavLink id="timeline" label={t('navbar.guideNavbar.timeline')} mobile />
            <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
              <Link to="/" className="text-orange-400 font-bold text-sm hover:underline flex items-center gap-1.5" onClick={() => setIsMenuOpen(false)}>
                <ArrowLeft size={16} />
                <span>{t('navbar.backToHome')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Decorative background element for the journey feeling */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-orange-100 via-slate-200 to-transparent -z-10 hidden lg:block opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        
        {/* Beautiful Hero Header Section */}
        <div className="text-center mb-16 relative bg-slate-900 text-white rounded-[2rem] p-8 md:p-16 shadow-2xl overflow-hidden group">
          {/* Decorative glowing blobs */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 font-semibold text-sm mb-8 shadow-xl"
            >
              <Rocket className="w-4 h-4" />
              AI Pilot Program
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Tester Guide <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">& Guardrails</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Welcome, and thank you for joining the ChefCode AI pilot. Over the next 4 weeks, you'll be one of 30 chefs testing ChefCode's AI-powered kitchen management app in real conditions.
            </motion.p>
          </div>
        </div>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Rocket className="w-5 h-5" />
            </span>
            Quick Start
          </h2>
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-10 text-slate-600">
              <div className="flex gap-4">
                <span className="font-bold text-slate-900">1.</span>
                <div>
                  <p>Open your browser (mobile or desktop) and go to:</p>
                  <a href="https://chefcode.web.app" className="text-orange-500 font-medium hover:underline block mt-1">https://chefcode.web.app</a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">2.</span>
                <div className="space-y-4">
                  <p><strong>Sign in with your own account.</strong> We have created a ChefCode account for you, with some data already in it. On the Sign In tab, type the email and password your Pilot Manager gives you, then tap Sign In (box 1 in Figure 1).</p>
                  
                  {/* IMMAGINE 1 */}
                  <div className="w-full my-6 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                    <img src={guideImg1} alt="Figure 1 - The sign-in screen" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">3.</span>
                <div className="w-full">
                  <p className="mb-4"><strong>Select your role when prompted</strong> — Waiter, Sub-Chef, Chef, or F&B Manager. Your role controls which sections you can see:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <ConciergeBell className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">Waiter</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">Operations</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <UtensilsCrossed className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">Sub-Chef</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">Operations, Stock</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <ChefHat className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">Chef</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">Dashboard, Operations, Stock</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">F&B Mgr</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">Dashboard, Operations, Stock, Compliance</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-orange-900 text-sm">
                    <strong>You can always change your role.</strong> It isn't permanent, so feel free to explore different roles and see what each one can see. On a computer, click the role button in the top bar (it shows your current role, e.g. Chef). On a phone, open the ⋮ menu at the top right. Then choose "Switch to ..." or "View All Roles".
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">4.</span>
                <p><strong>Land in Operations</strong> — this is where most of the pilot testing happens: Recipe Library, Production Task Board, Task Execution, Team Members, and the AI Assistant.</p>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">5.</span>
                <p><strong>Try your first task:</strong> open the AI Assistant and ask a starter question about your stock, a recipe, or today's production tasks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Test */}
        <section id="what-to-test" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Search className="w-5 h-5" />
            </span>
            What to Test in Operations
          </h2>
          <p className="text-slate-600 mb-8 font-medium">Please spend time in each of these areas over the pilot and try to break things — that's the point:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Book className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">Recipe Library</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">Create, edit, and organize recipes; map ingredients to inventory.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><ClipboardCheck className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">Production Task</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">Create tasks, assign them, start/complete them, and check usage and cost.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Users className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">Team Members</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">Add and edit the people you assign tasks to across your kitchen brigade.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Bot className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">AI Assistant</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">Ask about stock, recipes, production, dashboards, margins, or forecasts.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">Confirm / Cancel</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">Confirm AI-proposed data-changing actions before they apply. Test cancelling too.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Search className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">Dashboard & Stock</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">If your role includes Dashboard, Stock, or Compliance, explore them and provide feedback.</p>
            </div>

          </div>
        </section>

        {/* Interactive Testing Guide */}
        <section id="suggested-tests" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Play className="w-5 h-5" />
            </span>
            Suggested First Test
          </h2>
          <p className="text-slate-600 mb-8">A common first-week journey helps the team compare feedback across all beta accounts. You can test through two workflows. Follow the interactive steps below.</p>
          
          <div className="space-y-16">
            
            {/* Manual Flow Section */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-200 w-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <User className="text-orange-500 w-8 h-8 p-1.5 bg-orange-100 rounded-lg" />
                  Manual Flow
                </h3>
                <p className="text-slate-500 text-lg">Learn the platform directly by completing these tasks manually. <span className="text-sm font-semibold text-orange-600 block sm:inline sm:ml-2">💡 Click any step to open instructions and watch video demos.</span></p>
              </div>
              
              <div className="flex flex-col gap-4">
                {manualFlowSteps.map((step, index) => (
                  <StepItem 
                    key={index} 
                    step={step} 
                    index={index} 
                    activeIndex={activeManualFlow} 
                    setActiveIndex={(i) => {
                      setActiveManualFlow(i);
                      setCurrentFlow('manual');
                    }}
                    setIsVideoOpen={setIsVideoOpen}
                    setActiveVideoUrl={setActiveVideoUrl}
                  />
                ))}
              </div>
            </div>

            {/* AI Flow Section */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-200 relative overflow-hidden w-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Bot className="text-blue-500 w-8 h-8 p-1.5 bg-blue-100 rounded-lg" />
                  AI Flow
                </h3>
                <p className="text-slate-500 text-lg">Consult the same data and repeat actions through text or voice AI. <span className="text-sm font-semibold text-blue-600 block sm:inline sm:ml-2">💡 Click any step to explore AI capabilities.</span></p>
              </div>
              
              <div className="flex flex-col gap-4">
                {aiFlowSteps.map((step, index) => (
                  <StepItem 
                    key={index} 
                    step={step} 
                    index={index} 
                    activeIndex={activeAIFlow} 
                    setActiveIndex={(i) => {
                      setActiveAIFlow(i);
                      setCurrentFlow('ai');
                    }}
                    setIsVideoOpen={setIsVideoOpen}
                    setActiveVideoUrl={setActiveVideoUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guardrails & Reporting */}
        <div className="flex flex-col gap-12 mb-16 max-w-4xl mx-auto relative">
          
          {/* Card: Data Privacy */}
          <div id="guardrails" className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group scroll-mt-28">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-125"></div>
            
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <ShieldAlert className="text-orange-500 w-8 h-8" />
              Data Privacy & AI Guardrails
            </h3>
            <p className="text-slate-300 text-lg font-medium mb-10 max-w-2xl mx-auto">ChefCode's AI Assistant runs on Gemini via Vertex AI. As with any AI system, please follow these safety rules during the pilot:</p>
            
            <div className="space-y-10 text-left max-w-3xl mx-auto">
              
              {/* 3.1 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Protect Personal and Confidential Information</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Use fictional or test data wherever possible. Do not enter personal information, passwords, banking details, or sensitive customer or employee records.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Avoid sharing confidential business information, such as proprietary recipes, supplier contracts, confidential pricing, or documents that you are not authorized to share.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Do not assume that information entered into the AI Assistant is automatically private or deleted after use.</span></li>
                </ul>
              </div>

              {/* 3.2 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Use AI Responsibly</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>ChefCode's AI Assistant uses Gemini via Vertex AI. AI-generated responses may contain errors or incomplete information.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Always verify important outputs, especially ingredient quantities, recipes, costs, margins, forecasts, and inventory recommendations.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Do not rely on AI alone for food safety, allergen, HACCP, legal, or financial decisions. Use your professional judgment and established procedures.</span></li>
                </ul>
              </div>

              {/* 3.3 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Review AI Actions Before Confirming</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Carefully review AI-proposed changes to ingredients, quantities, inventory, recipes, or tasks before confirming them.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Check that the selected item, quantity, and unit are correct. Confirm only when you are satisfied with the proposed action; otherwise, cancel it.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Use test records during the pilot unless you have been explicitly authorized to work with live data.</span></li>
                </ul>
              </div>

              {/* 3.4 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Keep Your Account Secure</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Keep your login credentials private and do not share accounts with other testers.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Access only the features and data permitted by your assigned role. Sign out when using a shared device.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Do not include passwords or other access credentials in screenshots, prompts, or feedback reports.</span></li>
                </ul>
              </div>

              {/* 3.5 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Check Feedback and Attachments</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Feedback submissions may include screenshots and contextual information, such as the page, user role, device, and app version.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Review screenshots and attachments before submitting them. Remove personal, confidential, or unnecessary information.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>When reporting a bug, describe the issue using test data wherever possible. Do not attach real customer records, invoices, or contracts unless specifically authorized.</span></li>
                </ul>
              </div>

              {/* 3.6 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Report Privacy or Security Concerns</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Immediately report suspected data exposure, unauthorized access, account compromise, or unexpected changes to records.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div><span>Provide enough detail to explain the issue, but do not include additional sensitive information in your report.</span></li>
                </ul>
              </div>

              <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-md text-center">
                <p className="font-bold text-lg mb-2">Remember</p>
                <p className="opacity-90 font-medium">ChefCode is in pilot testing, and features or AI responses may change. Protect confidential information, verify AI-generated outputs, and keep human judgment in control of important decisions.</p>
              </div>

            </div>
          </div>

          {/* Card: Feedback & Bugs */}
          <div id="feedback-bugs" className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 text-white text-center shadow-xl scroll-mt-28">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Bug className="text-orange-500" />
              How to Report Feedback & Bugs
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">You will hit rough edges — that's exactly what this pilot is for. When you do, tell us straight from the app with the Send Feedback button.</p>
            
            <ol className="space-y-6 text-slate-300 text-sm list-none pl-0 text-left max-w-2xl mx-auto">
              <li className="flex gap-3">
                <span className="font-bold text-white">1.</span>
                <div>
                  <strong>Open Send Feedback.</strong> On a computer, click the feedback icon in the top bar. On the Dashboard there is also a Send Feedback button under Quick Actions. On a phone, tap the ⋮ menu at the top right, then Send Feedback.
                  
                  {/* IMMAGINI 2 e 3 con Animazione Orizzontale */}
                  <div className="w-full my-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative">
                    <motion.div 
                      initial={{ opacity: 0, x: -100, rotate: -5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                      className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-10 hover:z-30 transition-z duration-300 md:-mr-8 md:scale-110"
                    >
                      <img src={guideImg2} alt="Figure 2 - Desktop feedback" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 100, rotate: 5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                      className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-20 hover:z-30 transition-z duration-300 md:-ml-8 md:scale-110"
                    >
                      <img src={guideImg3} alt="Figure 3 - Mobile feedback form" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">2.</span>
                <span><strong>Choose the kind of feedback:</strong> Problem, Idea, Question or Praise.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">3.</span>
                <span><strong>Tell us more:</strong> which screen you were on, what you did, what happened and what you expected instead.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">4.</span>
                <span><strong>Check the attachments:</strong> A screenshot is added automatically. You can add up to 5 photos.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">5.</span>
                <span><strong>Send it.</strong> Optionally choose which part of the app it is about, then tap Send feedback.</span>
              </li>
            </ol>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm font-semibold text-white mb-2">Using the shared admin account?</p>
              <p className="text-xs text-slate-400 mb-4">Our replies go to the admin email, so add your name and email to your message if you'd like us to get back to you.</p>
              
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                <p className="text-xs text-red-200"><strong>For anything urgent</strong> — you're blocked, can't sign in, or something looks unsafe — contact your Pilot Manager directly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section id="timeline" className="scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">4</span>
            Pilot Timeline
          </h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                { title: "Duration", desc: "4 weeks from kickoff" },
                { title: "Weekly check-in", desc: "2-min pulse survey every Friday" },
                { title: "Mid-pilot review", desc: "Optional 15-min call, week 2" },
                { title: "Final survey", desc: "Sent in the last week of pilot" },
              ].map((item, i) => (
                <div key={i} className="pt-4 md:pt-0 md:px-6 first:px-0 first:pt-0">
                  <div className="flex items-center gap-2 mb-2 text-orange-500">
                    <Calendar className="w-5 h-5" />
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* OVERLAY VIDEO COMPONENT (Moved to root level for correct z-index over navbar) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[100]"
          >
            <VideoDisplay 
              videoUrl={activeVideoUrl}
              stepTitle={currentFlow === 'manual' ? manualFlowSteps[activeManualFlow]?.title : aiFlowSteps[activeAIFlow]?.title}
              onClose={() => setIsVideoOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserGuide;
