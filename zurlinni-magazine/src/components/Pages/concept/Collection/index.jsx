import React from 'react'
import "./collection.css"

import CardImage from './components/CardImage'

import model1 from '../../../../assets/model1.png'
import model2 from '../../../../assets/model2.png'
import model3 from '../../../../assets/model3.png'
import model4 from '../../../../assets/model4.png'
import model5 from '../../../../assets/model5.png'
import model6 from '../../../../assets/model1.png'


export default function Collection() {
  return (
    <div className='collection-container'>
        <h2 className='collection-title'>Coleção</h2>
        <div className='items-wrapper'>
            <CardImage image = {model1} alt ="model1"/>
            <CardImage image = {model2} alt = "model2"/>
            <CardImage image = {model3} alt = "model3"/>
            <CardImage image = {model4} alt = "model4"/>
            <CardImage image = {model5} alt = "model5"/>
            <CardImage image = {model6} alt = "model6"/>
        </div>
    </div>
  )
}
