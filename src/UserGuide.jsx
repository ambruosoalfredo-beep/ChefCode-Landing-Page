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
  Award,
  Milestone,
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
import { translations } from './data/translations';
import LanguageSwitcher from './components/LanguageSwitcher';
import videoDemo from './assets/sign_in_opt.webm';
import ocrExtractionVideo from './assets/ocr_extraction.webm';
import addIngredientVideo from './assets/add_ingredient.webm';
import semiPreparedCremaVideo from './assets/semi_prepared_crema.webm';
import recipeBurrataVideo from './assets/recipe_burrata.webm';
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

const StepItem = ({ step, index, activeIndex, setActiveIndex, setIsVideoOpen, setActiveVideoUrl, comingSoonText, guideLabel, twoVideosLabel }) => {
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
                  <span>{step.twoWideVideos || step.videoSrc2 !== undefined ? (twoVideosLabel || '2 Videos') : 'Video Demo'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-100 border border-slate-200/60">
                  {guideLabel || 'Guide'}
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
                          <span className="text-sm font-medium text-slate-400">{comingSoonText || "Video in arrivo..."}</span>
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

const VideoDisplay = ({ videoUrl, stepTitle, onClose, placeholderTitle, taskLabel }) => {
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
            <span className="text-2xl font-medium text-white mb-2">{placeholderTitle || "Video/GIF Dimostrativo"}</span>
            <span className="text-lg opacity-70">{taskLabel || "Mostrerà il task:"} "{stepTitle}"</span>
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

const normalizeForSearch = (str) => {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents (è -> e, à -> a, etc.)
    .toLowerCase()
    .replace(/[-_'/\\.,;:!?()%#&]/g, ' ') // treat dashes, slashes, punctuation as spaces
    .replace(/\s+/g, ' ')
    .trim();
};

const STOPWORDS_REGEX = /\b(di|da|del|della|dello|dei|degli|delle|al|alla|allo|ai|agli|alle|il|lo|la|i|gli|le|un|uno|una|ed|ad|of|to|for|in|on|at|by|the|a|an|and|or)\b/g;

const stripStopwords = (str) => {
  return str.replace(STOPWORDS_REGEX, ' ').replace(/\s+/g, ' ').trim();
};

// Build a dynamic vocabulary lexicon across all glossary terms (both IT and EN) for universal compound decomposition
const buildGlossaryLexicon = () => {
  const words = new Set();
  const allItems = [
    ...(translations?.it?.guide?.glossary?.items || []),
    ...(translations?.en?.guide?.glossary?.items || []),
  ];
  allItems.forEach((item) => {
    const text = `${item.term} ${item.id || ''}`;
    const norm = normalizeForSearch(text);
    norm.split(' ').forEach((w) => {
      if (w.length >= 3) words.add(w);
    });
  });
  return Array.from(words).sort((a, b) => b.length - a.length); // longest first
};

const GLOSSARY_LEXICON = buildGlossaryLexicon();

const highlightMatch = (text, query) => {
  if (!query || !query.trim()) return text;

  // Extract individual words/tokens, normalizing punctuation
  const rawTokens = query
    .trim()
    .split(/[\s\-_\/.,;:!?()%#&]+/)
    .filter((t) => t.length > 0);

  if (rawTokens.length === 0) return text;

  // Universally expand tokens with any constituent sub-tokens found in the glossary lexicon
  const allTokens = new Set(rawTokens);
  rawTokens.forEach((t) => {
    const low = t.toLowerCase();
    for (const word of GLOSSARY_LEXICON) {
      if (low.includes(word) && word.length >= 3 && low.length > word.length) {
        allTokens.add(word);
      }
    }
  });

  const escapedTokens = Array.from(allTokens)
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (escapedTokens.length === 0) return text;

  const regex = new RegExp(`(${escapedTokens.join('|')})`, 'gi');
  const parts = String(text).split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-orange-100 text-orange-900 font-bold rounded px-1 py-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const getGlossaryScore = (item, searchQuery) => {
  if (!searchQuery || !searchQuery.trim()) return 100;

  const normQuery = normalizeForSearch(searchQuery);
  const compactQuery = normQuery.replace(/\s+/g, '');
  const compactQueryNoStop = stripStopwords(normQuery).replace(/\s+/g, '');

  const normTerm = normalizeForSearch(item.term);
  const compactTerm = normTerm.replace(/\s+/g, '');
  const compactTermNoStop = stripStopwords(normTerm).replace(/\s+/g, '');

  const normId = normalizeForSearch(item.id);
  const compactId = normId.replace(/\s+/g, '');

  const normMeaning = normalizeForSearch(item.meaning);
  const compactMeaning = normMeaning.replace(/\s+/g, '');
  const compactMeaningNoStop = stripStopwords(normMeaning).replace(/\s+/g, '');

  const normCategory = normalizeForSearch(item.category || '');

  // 1. Direct match on Term / ID (Highest relevance)
  if (normTerm === normQuery || normId === normQuery) return 1000;
  if (compactTerm === compactQuery || compactId === compactQuery) return 950;
  if (compactTermNoStop === compactQueryNoStop && compactQueryNoStop.length >= 3) return 900;
  if (normTerm.includes(normQuery) || normId.includes(normQuery)) return 850;
  if (compactTerm.includes(compactQuery) || compactId.includes(compactQuery)) return 800;
  if (compactQueryNoStop.length >= 4 && compactTermNoStop.includes(compactQueryNoStop)) return 750;

  // 2. Multi-token match on Term / ID
  const tokens = normQuery.split(' ').filter(Boolean);
  if (tokens.length > 1) {
    const termTokensMatch = tokens.every((t) => normTerm.includes(t) || normId.includes(t));
    if (termTokensMatch) return 600;
  }

  // 3. Match on Meaning (Definition)
  if (normMeaning.includes(normQuery)) return 500;
  if (compactQuery.length >= 3 && compactMeaning.includes(compactQuery)) return 400;
  if (compactQueryNoStop.length >= 4 && compactMeaningNoStop.includes(compactQueryNoStop)) return 350;

  // 4. Token match across Term + Meaning + Category
  const combinedNorm = `${normTerm} ${normMeaning} ${normCategory} ${normId}`;
  if (tokens.length > 0) {
    const allTokensMatch = tokens.every((t) => {
      if (combinedNorm.includes(t)) return true;
      if (t.length >= 4) {
        const stem = t.slice(0, -1);
        return combinedNorm.split(' ').some((w) => w.startsWith(stem));
      }
      return false;
    });
    if (allTokensMatch) return 300;
  }

  return 0;
};

const categoryStyles = {
  recipes_inventory: {
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dot: 'bg-emerald-500',
  },
  foodcost_sales: {
    bg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    dot: 'bg-amber-500',
  },
  purchasing_stock: {
    bg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    dot: 'bg-sky-500',
  },
  kitchen_haccp: {
    bg: 'bg-rose-50 text-rose-700 border-rose-200/80',
    dot: 'bg-rose-500',
  },
  ai_workflows: {
    bg: 'bg-purple-50 text-purple-700 border-purple-200/80',
    dot: 'bg-purple-500',
  },
};

const GlossaryDrawer = ({ isOpen, onClose, glossary, language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const inputRef = useRef(null);

  // Focus search input when drawer opens & manage body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 250);
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!glossary || !glossary.items) return null;

  const categories = [
    { key: 'all', label: glossary.categories?.all || (language === 'it' ? 'Tutti' : 'All') },
    { key: 'recipes_inventory', label: glossary.categories?.recipes_inventory || (language === 'it' ? 'Ricette & Magazzino' : 'Recipes & Inventory') },
    { key: 'foodcost_sales', label: glossary.categories?.foodcost_sales || (language === 'it' ? 'Food Cost & Vendite' : 'Food Cost & Sales') },
    { key: 'purchasing_stock', label: glossary.categories?.purchasing_stock || (language === 'it' ? 'Acquisti & Scorte' : 'Purchasing & Stock') },
    { key: 'kitchen_haccp', label: glossary.categories?.kitchen_haccp || (language === 'it' ? 'Cucina & HACCP' : 'Kitchen Ops & HACCP') },
    { key: 'ai_workflows', label: glossary.categories?.ai_workflows || (language === 'it' ? 'Flussi & Assistente IA' : 'Workflows & AI') },
  ];

  const filteredItems = glossary.items
    .map((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return null;
      const score = getGlossaryScore(item, searchQuery);
      if (score === 0) return null;
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);

  const getCategoryCount = (catKey) => {
    if (catKey === 'all') return glossary.items.length;
    return glossary.items.filter((item) => item.category === catKey).length;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-xl md:max-w-2xl bg-white shadow-2xl flex flex-col h-full border-l border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 flex-shrink-0" />

            {/* Drawer Header */}
            <div className="p-5 md:p-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-4 flex-shrink-0 bg-white">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                  <Book className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-lg md:text-xl truncate">
                    {glossary.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-slate-500 font-medium">
                      {glossary.items.length} {language === 'it' ? 'termini documentati' : 'documented terms'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all flex-shrink-0 group cursor-pointer"
                title={language === 'it' ? 'Chiudi (Esc)' : 'Close (Esc)'}
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Search Bar & Category Pills (Sticky in Drawer) */}
            <div className="p-5 md:p-6 py-4 bg-slate-50/80 border-b border-slate-100 flex-shrink-0 space-y-3">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={glossary.searchPlaceholder}
                  className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-0.5">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.key;
                  const count = getCategoryCount(cat.key);
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Count & Reset */}
              <div className="flex items-center justify-between text-xs text-slate-400 px-0.5">
                <span>
                  {glossary.termsCount
                    ? glossary.termsCount.replace('{count}', filteredItems.length).replace('{total}', glossary.items.length)
                    : `${filteredItems.length} di ${glossary.items.length} termini`}
                </span>
                {(searchQuery || selectedCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="text-orange-500 hover:text-orange-600 font-semibold hover:underline cursor-pointer"
                  >
                    {glossary.resetSearch}
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Terms Content */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-3.5 bg-slate-50/40">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const catStyle = categoryStyles[item.category] || categoryStyles.recipes_inventory;
                  const catLabel = glossary.categories?.[item.category] || item.category;

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${catStyle.bg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`}></span>
                          {catLabel}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-orange-600 transition-colors leading-snug">
                        {highlightMatch(item.term, searchQuery)}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2 font-normal">
                        {highlightMatch(item.meaning, searchQuery)}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-16 px-4 rounded-2xl bg-white border border-dashed border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 mx-auto flex items-center justify-center mb-3">
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">
                    {glossary.noResultsTitle}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
                    {glossary.noResultsDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-orange-500 text-white font-semibold text-xs shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    {glossary.resetSearch}
                  </button>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 px-6 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono text-slate-600">Esc</kbd>
                <span>{language === 'it' ? 'per chiudere' : 'to close'}</span>
              </span>
              <button
                onClick={onClose}
                className="text-orange-500 font-bold hover:underline cursor-pointer"
              >
                {language === 'it' ? 'Chiudi' : 'Close'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const GlossarySection = ({ glossary, language, onOpenDrawer }) => {
  if (!glossary) return null;

  return (
    <section id="glossary" className="mb-16 scroll-mt-28">
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden group border border-slate-700/60">
        {/* Glowing background blob */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/25 transition-all duration-700"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-400 font-semibold text-xs mb-4 shadow-sm">
              <Book className="w-3.5 h-3.5" />
              <span>{glossary.title}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              <span className="text-white/80">{glossary.items?.length || 28} {language === 'it' ? 'termini documentati' : 'documented terms'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {language === 'it' ? 'Hai dubbi sui termini della piattaforma?' : 'Need clarification on platform terms?'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {glossary.subtitle}
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenDrawer}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 group/btn cursor-pointer"
            >
              <Book className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              <span>{language === 'it' ? 'Apri il Glossario Completo' : 'Open Full Glossary'}</span>
              <span className="text-orange-200 group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserGuide = () => {
  const { t, language } = useLanguage();
  const guide = translations[language]?.userGuide || translations['en'].userGuide;
  const [activeManualFlow, setActiveManualFlow] = useState(null);
  const [activeAIFlow, setActiveAIFlow] = useState(null);
  
  // Aggiunto stato per la modale video (overlay)
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [currentFlow, setCurrentFlow] = useState('manual'); // 'manual' or 'ai'
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Navbar & Scroll state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('quick-start');
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0, opacity: 0 });

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
        setIndicatorProps((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    const timer = setTimeout(updateIndicator, 60);
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection, scrolled]);

  // Robust Scroll Spy: tracks all sections (including tall multi-step sections like suggested-tests)
  useEffect(() => {
    const sections = ['quick-start', 'what-to-test', 'suggested-tests', 'guardrails', 'feedback-bugs', 'glossary', 'timeline'];
    let ticking = false;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If near top of page, activate first section
          if (window.scrollY < 120) {
            setActiveSection(sections[0]);
            ticking = false;
            return;
          }

          // If near bottom of page, activate last section
          const scrollBottom = window.innerHeight + window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          if (scrollBottom >= totalHeight - 60) {
            setActiveSection(sections[sections.length - 1]);
            ticking = false;
            return;
          }

          // Trigger line below the fixed navbar (activates when section enters upper third of viewport)
          const triggerLine = Math.min(window.innerHeight * 0.35, 260);
          let currentSection = sections[0];

          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerLine) {
                currentSection = id;
              }
            }
          }

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
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
        onClick={(e) => {
          if (id === 'glossary') {
            e.preventDefault();
            setIsGlossaryOpen(true);
            setIsMenuOpen(false);
            return;
          }
          scrollToSection(e, id);
        }}
      >
        {label}
      </a>
    );
  };

  const manualFlowSteps = [
    { title: guide.suggestedTests.manualSteps[0].title, content: guide.suggestedTests.manualSteps[0].content, hasVideo: true, videoSrc: videoDemo },
    { title: guide.suggestedTests.manualSteps[1].title, content: guide.suggestedTests.manualSteps[1].content, hasVideo: true, videoSrc: ocrExtractionVideo, videoSrc2: addIngredientVideo, loopAt: 11.90 },
    { 
      title: guide.suggestedTests.manualSteps[2].title, 
      content: guide.suggestedTests.manualSteps[2].content, 
      hasVideo: true, 
      videoSrc: semiPreparedCremaVideo, 
      videoSrc2: recipeBurrataVideo, 
      twoWideVideos: true, 
      vid1Label: guide.suggestedTests.manualSteps[2].vid1Label, 
      vid2Label: guide.suggestedTests.manualSteps[2].vid2Label 
    },
    { title: guide.suggestedTests.manualSteps[3].title, content: guide.suggestedTests.manualSteps[3].content, hasVideo: true, videoSrc: mappingIngredientVideo },
    { title: guide.suggestedTests.manualSteps[4].title, content: guide.suggestedTests.manualSteps[4].content, hasVideo: true, videoSrc: taskVideo },
    { title: guide.suggestedTests.manualSteps[5].title, content: guide.suggestedTests.manualSteps[5].content, hasVideo: true, videoSrc: singleSalesVideo, videoSrc2: massImportVideo, twoWideVideos: true, vid1Label: guide.suggestedTests.manualSteps[5].vid1Label, vid2Label: guide.suggestedTests.manualSteps[5].vid2Label },
    { title: guide.suggestedTests.manualSteps[6].title, content: guide.suggestedTests.manualSteps[6].content, hasVideo: true, videoSrc: kitchenDashboardVideo, videoSrc2: managementDashboardVideo, twoWideVideos: true, vid1Label: guide.suggestedTests.manualSteps[6].vid1Label, vid2Label: guide.suggestedTests.manualSteps[6].vid2Label },
    { title: guide.suggestedTests.manualSteps[7].title, content: guide.suggestedTests.manualSteps[7].content, hasVideo: true, videoSrc: shoppingVideo },
    { title: guide.suggestedTests.manualSteps[8].title, content: guide.suggestedTests.manualSteps[8].content, hasVideo: true, videoSrc: validateOrderVideo },
  ];

  const aiFlowSteps = [
    { 
      title: guide.suggestedTests.aiSteps[0].title, 
      content: guide.suggestedTests.aiSteps[0].content, 
      hasVideo: true,
      videoSrc: aiAssistantAddIngredientVideo,
      videoSrc2: aiAssistantAddProductionVideo,
      twoWideVideos: true,
      vid1Label: guide.suggestedTests.aiSteps[0].vid1Label,
      vid2Label: guide.suggestedTests.aiSteps[0].vid2Label
    },
    { 
      title: guide.suggestedTests.aiSteps[1].title, 
      content: guide.suggestedTests.aiSteps[1].content, 
      hasVideo: true,
      videoSrc: aiAssistantManagementVideo,
      vid1Label: guide.suggestedTests.aiSteps[1].vid1Label
    },
    { 
      title: guide.suggestedTests.aiSteps[2].title, 
      content: guide.suggestedTests.aiSteps[2].content, 
      hasVideo: true, 
      videoSrc: aiVoiceVideo 
    },
    { 
      title: guide.suggestedTests.aiSteps[3].title, 
      content: guide.suggestedTests.aiSteps[3].content, 
      hasVideo: false 
    },
    { 
      title: guide.suggestedTests.aiSteps[4].title, 
      content: guide.suggestedTests.aiSteps[4].content, 
      hasVideo: false,
      linkToSection: "feedback-bugs",
      linkLabel: guide.suggestedTests.aiSteps[4].linkLabel
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
            <NavLink id="glossary" label={t('navbar.guideNavbar.glossary')} />
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
            <NavLink id="glossary" label={t('navbar.guideNavbar.glossary')} mobile />
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
              {guide.hero.tag}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              {guide.hero.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{guide.hero.titleGradient}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {guide.hero.description}
            </motion.p>

            {/* Quick Hero Glossary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 text-orange-300 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 group cursor-pointer"
              >
                <Book className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                <span>{guide.glossary?.heroButton || (language === 'it' ? 'Consulta il Glossario (28 termini)' : 'Explore Glossary (28 terms)')}</span>
                <span className="text-orange-400 group-hover:text-white transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Rocket className="w-5 h-5" />
            </span>
            {guide.quickStart.title}
          </h2>
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-10 text-slate-600">
              <div className="flex gap-4">
                <span className="font-bold text-slate-900">1.</span>
                <div>
                  <p>{guide.quickStart.step1Title}</p>
                  <a href="https://chefcode.web.app" className="text-orange-500 font-medium hover:underline block mt-1">https://chefcode.web.app</a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">2.</span>
                <div className="space-y-4">
                  <p>{guide.quickStart.step2Text}</p>
                  
                  {/* IMMAGINE 1 */}
                  <div className="w-full my-6 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                    <img src={guideImg1} alt={guide.quickStart.fig1Alt} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">3.</span>
                <div className="w-full">
                  <p className="mb-4">{guide.quickStart.step3Intro}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <ConciergeBell className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">{guide.quickStart.roles.waiter.name}</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">{guide.quickStart.roles.waiter.scope}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <UtensilsCrossed className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">{guide.quickStart.roles.subChef.name}</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">{guide.quickStart.roles.subChef.scope}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <ChefHat className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">{guide.quickStart.roles.chef.name}</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">{guide.quickStart.roles.chef.scope}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-start text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-bold text-slate-900 mb-2">{guide.quickStart.roles.fbMgr.name}</span>
                      <span className="text-xs text-slate-500 font-medium leading-relaxed">{guide.quickStart.roles.fbMgr.scope}</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-orange-900 text-sm">
                    {guide.quickStart.roleNote}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">4.</span>
                <p>{guide.quickStart.step4Text}</p>
              </div>

              <div className="flex gap-4">
                <span className="font-bold text-slate-900">5.</span>
                <p>{guide.quickStart.step5Text}</p>
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
            {guide.whatToTest.title}
          </h2>
          <p className="text-slate-600 mb-8 font-medium">{guide.whatToTest.subtitle}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Book className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.recipes.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.recipes.desc}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><ClipboardCheck className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.tasks.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.tasks.desc}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Users className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.team.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.team.desc}</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Bot className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.aiAssistant.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.aiAssistant.desc}</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.confirm.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.confirm.desc}</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-orange-500/60 transition-all duration-500 mb-6 border border-slate-700/30 group-hover:border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative z-10"><Search className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 group-hover:scale-105 transition-all duration-300">{guide.whatToTest.cards.dashboard.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300 text-sm">{guide.whatToTest.cards.dashboard.desc}</p>
            </div>

          </div>
        </section>

        {/* Interactive Testing Guide */}
        <section id="suggested-tests" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Play className="w-5 h-5" />
            </span>
            {guide.suggestedTests.title}
          </h2>
          <p className="text-slate-600 mb-8">{guide.suggestedTests.subtitle}</p>
          
          <div className="space-y-16">
            
            {/* Manual Flow Section */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-200 w-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <User className="text-orange-500 w-8 h-8 p-1.5 bg-orange-100 rounded-lg" />
                  {guide.suggestedTests.manualFlowTitle}
                </h3>
                <p className="text-slate-500 text-lg">{guide.suggestedTests.manualFlowSubtitle} <span className="text-sm font-semibold text-orange-600 block sm:inline sm:ml-2">{guide.suggestedTests.manualFlowHint}</span></p>
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
                    comingSoonText={guide.videoComingSoon}
                    guideLabel={language === 'it' ? 'Guida' : 'Guide'}
                    twoVideosLabel={language === 'it' ? '2 Video' : '2 Videos'}
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
                  {guide.suggestedTests.aiFlowTitle}
                </h3>
                <p className="text-slate-500 text-lg">{guide.suggestedTests.aiFlowSubtitle} <span className="text-sm font-semibold text-blue-600 block sm:inline sm:ml-2">{guide.suggestedTests.aiFlowHint}</span></p>
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
                    comingSoonText={guide.videoComingSoon}
                    guideLabel={language === 'it' ? 'Guida' : 'Guide'}
                    twoVideosLabel={language === 'it' ? '2 Video' : '2 Videos'}
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
              {guide.guardrails.title}
            </h3>
            <p className="text-slate-300 text-lg font-medium mb-10 max-w-2xl mx-auto">{guide.guardrails.subtitle}</p>
            
            <div className="space-y-10 text-left max-w-3xl mx-auto">
              
              {/* 3.1 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.personalData.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.personalData.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.2 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.responsibleAi.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.responsibleAi.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.3 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.reviewActions.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.reviewActions.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.4 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.accountSecurity.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.accountSecurity.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.5 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.checkFeedback.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.checkFeedback.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.6 */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{guide.guardrails.cards.reportConcerns.title}</h4>
                </div>
                <ul className="space-y-3 text-slate-300 ml-13">
                  {guide.guardrails.cards.reportConcerns.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-md text-center">
                <p className="font-bold text-lg mb-2">{guide.guardrails.remember.title}</p>
                <p className="opacity-90 font-medium">{guide.guardrails.remember.desc}</p>
              </div>

            </div>
          </div>

          {/* Card: Feedback & Bugs */}
          <div id="feedback-bugs" className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 text-white text-center shadow-xl scroll-mt-28">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Bug className="text-orange-500" />
              {guide.feedbackBugs.title}
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{guide.feedbackBugs.subtitle}</p>
            
            <ol className="space-y-6 text-slate-300 text-sm list-none pl-0 text-left max-w-2xl mx-auto">
              <li className="flex gap-3">
                <span className="font-bold text-white">1.</span>
                <div>
                  <strong>{guide.feedbackBugs.steps[0].title}</strong> {guide.feedbackBugs.steps[0].text}
                  
                  {/* IMMAGINI 2 e 3 con Animazione Orizzontale */}
                  <div className="w-full my-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative">
                    <motion.div 
                      initial={{ opacity: 0, x: -100, rotate: -5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                      className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-10 hover:z-30 transition-z duration-300 md:-mr-8 md:scale-110"
                    >
                      <img src={guideImg2} alt={guide.feedbackBugs.fig2Alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 100, rotate: 5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                      className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-20 hover:z-30 transition-z duration-300 md:-ml-8 md:scale-110"
                    >
                      <img src={guideImg3} alt={guide.feedbackBugs.fig3Alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">2.</span>
                <span><strong>{guide.feedbackBugs.steps[1].title}</strong> {guide.feedbackBugs.steps[1].text}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">3.</span>
                <span><strong>{guide.feedbackBugs.steps[2].title}</strong> {guide.feedbackBugs.steps[2].text}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">4.</span>
                <span><strong>{guide.feedbackBugs.steps[3].title}</strong> {guide.feedbackBugs.steps[3].text}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">5.</span>
                <span><strong>{guide.feedbackBugs.steps[4].title}</strong> {guide.feedbackBugs.steps[4].text}</span>
              </li>
            </ol>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm font-semibold text-white mb-2">{guide.feedbackBugs.adminEmailTitle}</p>
              <p className="text-xs text-slate-400 mb-4">{guide.feedbackBugs.adminEmailDesc}</p>
              
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                <p className="text-xs text-red-200"><strong>{language === 'it' ? 'Per qualsiasi urgenza' : 'For anything urgent'}</strong> — {guide.feedbackBugs.urgentNote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glossary Section */}
        <GlossarySection glossary={guide.glossary} language={language} onOpenDrawer={() => setIsGlossaryOpen(true)} />

        {/* Timeline / Roadmap Section */}
        <section id="timeline" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Milestone className="w-3.5 h-3.5" />
                {guide.timeline.badge || (language === 'it' ? 'Roadmap del Pilota' : 'Pilot Roadmap')}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                {guide.timeline.title}
              </h2>
              {guide.timeline.subtitle && (
                <p className="text-slate-500 text-sm md:text-base mt-1.5 max-w-2xl">
                  {guide.timeline.subtitle}
                </p>
              )}
            </div>
            <div className="hidden md:inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200/90 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {language === 'it' ? '4 Settimane • 4 Tappe Chiave' : '4 Weeks • 4 Key Milestones'}
            </div>
          </div>

          <div className="bg-gradient-to-b from-white via-slate-50/50 to-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 relative overflow-hidden">
            {/* Top decorative orange gradient bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            {/* Ambient warm background glow (unified orange brand palette) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Roadmap flow */}
            <div className="relative">
              {/* Horizontal Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-orange-100 z-0">
                <div className="w-full h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full opacity-70"></div>
              </div>

              {/* 4 Roadmap Milestone Columns */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {guide.timeline.cards.map((item, i) => {
                  const icons = [Rocket, ClipboardCheck, Users, Award];
                  const StepIcon = icons[i] || Calendar;

                  return (
                    <div key={i} className="flex flex-col group">
                      {/* Milestone Node on Track (Desktop) */}
                      <div className="hidden md:flex items-center justify-center w-full mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 flex items-center justify-center font-black text-base tracking-tight border-2 border-white ring-4 ring-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/40">
                          {item.step || `0${i + 1}`}
                        </div>
                      </div>

                      {/* Milestone Card (Centered content & unified ChefCode palette) */}
                      <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-sm group-hover:border-orange-500/40 transition-all duration-300 flex flex-col items-center text-center justify-between h-full group-hover:shadow-xl group-hover:-translate-y-1 relative">
                        {/* Mobile Header: Step Badge & Phase */}
                        <div className="md:hidden flex items-center justify-between w-full mb-4">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xs font-black shadow-sm">
                              {item.step || `0${i + 1}`}
                            </span>
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider bg-orange-50 text-orange-600 border-orange-200/80">
                              {item.phase || `Tappa 0${i + 1}`}
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                            <StepIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center text-center flex-1 w-full">
                          {/* Centered Step Icon */}
                          <div className="hidden md:flex w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 items-center justify-center mb-3.5 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                            <StepIcon className="w-5 h-5" />
                          </div>

                          {/* Centered Phase Badge */}
                          <div className="hidden md:flex justify-center mb-3">
                            <span className="text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider bg-orange-50 text-orange-600 border-orange-200/80">
                              {item.phase || `Tappa 0${i + 1}`}
                            </span>
                          </div>

                          {/* Title with consistent min-height for uniform alignment */}
                          <h4 className="text-[15px] md:text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors text-center min-h-[44px] flex items-center justify-center">
                            {item.title}
                          </h4>

                          {/* Description */}
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-center flex-1">
                            {item.desc}
                          </p>
                        </div>

                        {/* Bottom Tag / Micro-metadata centered */}
                        {item.tag && (
                          <div className="mt-4 pt-3.5 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500">
                            <Clock className="w-3.5 h-3.5 text-orange-500" />
                            <span>{item.tag}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* GLOSSARY SLIDE-OVER DRAWER */}
      <GlossaryDrawer 
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        glossary={guide.glossary}
        language={language}
      />
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
              placeholderTitle={guide.videoPlaceholder}
              taskLabel={language === 'it' ? 'Mostrerà il task:' : 'Shows task:'}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserGuide;
