import React from 'react'
import "./cardImage.css"

function CardImage({image, alt}) {
  return (
    <div className='card'>
      <div className='image-wrapper'>
        <img class="card-image" src = {image} alt={alt}/>
      </div>
    </div>
  )
}

export default CardImage