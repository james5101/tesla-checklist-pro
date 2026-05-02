import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Marketing from './pages/Marketing';
import InspectionApp from './pages/InspectionApp';
import ModelLanding from './pages/ModelLanding';
import Faq from './pages/Faq';
import HowItWorks from './pages/HowItWorks';
import Inspection from './pages/Inspection';
import Owners from './pages/Owners';
import Accessories from './pages/Accessories';
import ArticleDeliveryDefects from './pages/ArticleDeliveryDefects';
import ArticleWhatsIncluded from './pages/ArticleWhatsIncluded';
import ArticleDeliveryTimeline from './pages/ArticleDeliveryTimeline';
import { ScrollToTop } from './components/ScrollToTop';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/app" element={<InspectionApp />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tesla-delivery-day-accessories" element={<Accessories />} />
        <Route path="/tesla-delivery-defects-what-to-do" element={<ArticleDeliveryDefects />} />
        <Route path="/whats-included-with-new-tesla" element={<ArticleWhatsIncluded />} />
        <Route path="/tesla-delivery-day-timeline" element={<ArticleDeliveryTimeline />} />
        <Route path="/:slug" element={<ModelLanding />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
