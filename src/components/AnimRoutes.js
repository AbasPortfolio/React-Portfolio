import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </AnimatePresence>
  )
};

export default AnimRoutes;
