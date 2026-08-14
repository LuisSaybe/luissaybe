import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Index } from './pages/index/index.tsx';
import { Sound } from './pages/sound/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sound" element={<Sound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
