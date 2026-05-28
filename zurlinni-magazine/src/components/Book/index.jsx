import React, { useState } from 'react'
import Page from '../Page'
import "./style.css"
import {useSwap} from '../../hooks/useSwap'
import {motion, useAnimation} from 'framer-motion';
import {Concept} from "../Pages/concept/index.jsx"
import Collection from '../Pages/concept/Collection/index.jsx';
import Acessories from '../Pages/Acessories/index.jsx'
import Cover from '../Pages/Cover/index.jsx'
import MoreAccessories from '../Pages/moreAcessories/index.jsx';
import Hat2 from '../Pages/Hat2/index.jsx';
import Hat3 from '../Pages/Hat3/index.jsx';
import Hat4 from '../Pages/Hat4/index.jsx';
import Purse2 from '../Pages/Purse2/index.jsx';
import Purse3 from '../Pages/Purse3/index.jsx';
import PhoneCase from '../Pages/PhoneCase/index.jsx';
import Dress from '../Pages/Dress/index.jsx';
import Shirt from '../Pages/Shirt/index.jsx';
import Shirt2 from '../Pages/Shirt2/index.jsx';
import Shirt3 from '../Pages/Shirt3/index.jsx';
import Shirt4 from '../Pages/Shirt4/index.jsx';
import Shirt5 from '../Pages/Shirt5/index.jsx';

export default function Book() {

  const pages = [
    <Page><Cover/></Page>,
    <Page><Collection /></Page>,
    <Page><Dress /></Page>,
    <Page><Shirt /></Page>,
    <Page><Shirt2 /></Page>,
    <Page><Shirt3 /></Page>,
    <Page><Shirt4 /></Page>,
    <Page><Shirt5 /></Page>,
    <Page><Acessories /></Page>,
    <Page><MoreAccessories/></Page>,
    <Page><Hat2/></Page>,
    <Page><Hat3/></Page>,
    <Page><Hat4/></Page>,
    <Page><Purse2/></Page>,
    <Page><Purse3/></Page>,
    <Page><PhoneCase/></Page>,
    

    
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
      {pages[currentPage]}

      {flippingPage >=0 && 
        <motion.div
          className={`pages-wrapper ${direction > 0 ? 'page-animation-left' : 'page-animation-right'}`}
          animate={controls}
        >

        {pages[flippingPage]}
        </motion.div>
      }
    </div>
  )
}




