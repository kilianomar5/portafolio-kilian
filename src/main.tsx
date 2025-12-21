
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

<Routes>
  <Route path="/" element={<App />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// Register the Intersection Observer polyfill for older browsers
import 'intersection-observer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.tsx';

// Create a root for the application
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found!');
}
const root = createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
