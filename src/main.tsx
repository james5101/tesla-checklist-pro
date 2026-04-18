import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketing from './pages/Marketing';
import InspectionApp from './pages/InspectionApp';
import ModelLanding from './pages/ModelLanding';
import Faq from './pages/Faq';
import HowItWorks from './pages/HowItWorks';
import Inspection from './pages/Inspection';
import Owners from './pages/Owners';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/app" element={<InspectionApp />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/:slug" element={<ModelLanding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
