import React, { useState } from 'react'
import Page from '../Page'
import "./style.css"
import {useSwap} from '../../hooks/useSwap'
import {motion, useAnimation} from 'framer-motion';
import {Concept} from "../Pages/concept/index.jsx"
import Collection from '../Pages/concept/Collection/index.jsx';
import Acessories from '../Pages/Acessories/index.jsx'

export default function Book() {

  const pages = [
    <Concept/>,
    <Collection/>,
    <Acessories/>
  ];

  const pagesNum = pages.length-1;

  const [currentPage, setCurrentPage] = useState(0);
  const [flippingPage, setFlippingPage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const [direction, setDirection] = useState(1);

  const flipPage = async (direction) => {
  if (isAnimating) return;

  const targetPage = currentPage + direction;

  if (targetPage < 0 || targetPage > pagesNum) return;

  setIsAnimating(true);

  // save current visible page
  setFlippingPage(currentPage);

  // show destination page underneath
  setCurrentPage(targetPage);

  await new Promise(resolve =>
    requestAnimationFrame(resolve)
  );

  await controls.start({
    rotateY: direction >= 0 ? -180 : 180,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  });

  setFlippingPage(null);

  controls.set({
    rotateY: 0
  });

  setIsAnimating(false);
};

 const nextPage = () => {
  setDirection(1);
  flipPage(1);
};

const prevPage = () => {
  setDirection(-1);
  flipPage(-1);
};

  const {handleTouchStart, handleTouchMove, handleTouchEnd } = useSwap(prevPage, nextPage);
  
  return (
    <div 
      className='container' 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >       
       <Page next>{pages[currentPage]}</Page>

      {flippingPage >=0 && 
          <motion.div
            className={`pages-wrapper ${direction > 0 ? 'page-animation-left' : 'page-animation-right'}`}
            animate={controls}
          >

          <Page current>{pages[flippingPage]}</Page>
          </motion.div>
      }
    </div>
  )
}




