import React from 'react'

import "./acessories.css"
import glasses from '../../../assets/asset7.png'
import hat from '../../../assets/hat.png'
import purse from '../../../assets/purse.png'

export default function Acessories() {
  return (
    <div className='accessories-container'>
        <div className='big-img'>
            <img src={glasses} alt=""/>
        </div>
        <div className='flex-row'>
            <div className='smll-img'>
                <img src={hat} alt=""/>
            </div>
            <div className='smll-img'>
                <img src={purse} alt=""/>
            </div>
        </div>
    </div>
  )
}
