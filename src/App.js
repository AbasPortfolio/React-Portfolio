import React from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Header/>
        <AnimRoutes/>
    </>
  )
};

export default App;
