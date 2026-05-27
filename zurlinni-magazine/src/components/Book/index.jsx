import React, { useState } from 'react'
import Page from '../Page'
import "./style.css"
import {useSwap} from '../../hooks/useSwap'
import {motion, useAnimation} from 'framer-motion';

export default function Book() {
  const pagesNum = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [flippingPage, setFlippingPage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const [direction, setDirection] = useState(1);

  const flipPage = async (direction) => {
  if (isAnimating) return;

  const targetPage = currentPage + direction;

  if (targetPage < 1 || targetPage > pagesNum) return;

  setIsAnimating(true);

  // save current visible page
  setFlippingPage(currentPage);

  // show destination page underneath
  setCurrentPage(targetPage);

  await new Promise(resolve =>
    requestAnimationFrame(resolve)
  );

  await controls.start({
    rotateY: direction > 0 ? -180 : 180,
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

       <Page next>Page {currentPage}</Page>

      {flippingPage && 
          <motion.div
            className={`pages-wrapper ${direction > 0 ? 'page-animation-left' : 'page-animation-right'}`}
            animate={controls}
          >

          <Page current>Page {flippingPage}</Page>
          </motion.div>
      }
    </div>
  )
}




