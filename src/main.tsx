import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketing from './pages/Marketing';
import InspectionApp from './pages/InspectionApp';
import ModelLanding from './pages/ModelLanding';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/app" element={<InspectionApp />} />
        <Route path="/:slug" element={<ModelLanding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
