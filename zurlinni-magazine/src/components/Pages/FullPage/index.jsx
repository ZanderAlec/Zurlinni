import React from 'react'
import './fullPage.css'

export default function FullPage({image}) {
  return (
    <div className='fPage-container'>
        <img src={image} alt ="capa"/>
    </div>
  )
}
