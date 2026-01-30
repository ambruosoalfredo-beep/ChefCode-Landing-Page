

import React from 'react';
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

const App = () => {
  return (
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
      </Routes>
    </Router>
  );
};

export default App;