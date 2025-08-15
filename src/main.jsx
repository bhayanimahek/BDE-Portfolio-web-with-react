// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
  
//     <App />
 
//   </BrowserRouter>
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait" initial={false}>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
