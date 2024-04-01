import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import Image1 from '../img/home/beautiful miss.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

const Portfolio = () => {
  return (
    <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: '0'}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
        <motion.div 
        initial={{opacity: 0, y: '-80%'}}
        animate={{opacity: 1, y: '0'}}
        exit={{opacity: 0, y: '-80%'}}
        transition={transition1}
        className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left
        pt-24 lg:pt-36 pb-8'>
          <div className='flex flex-col'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras egestas eu magna eget ullamcorper. Fusce non maximus urna. Vivamus sit amet euismod tellus. 
                Nulla dapibus malesuada facilisis. Suspendisse nec semper tellus. Nam lectus purus, venenatis eget congue 
                 Quisque mattis tincidunt neque vitae efficitur.ut, convallis vel metus</p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
          </div>
        </motion.div>
        {/* image grid */}
        <div className='grid grid-cols-2 lg:gap-2'>
          {/* Image  */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt=''/>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
