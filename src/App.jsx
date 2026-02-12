

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Partners from './Partners';
import Register from './Register';
import Login from './Login';
import BecomePartner from './BecomePartner';
import PrivacyPolicy from './PrivacyPolicy';
import ComingSoonPage from './ComingSoonPage';
import HaccpPage from './HaccpPage';
import ScrollToTop from './ScrollToTop';
import JoinUs from './JoinUs';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/haccp" element={<HaccpPage />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;