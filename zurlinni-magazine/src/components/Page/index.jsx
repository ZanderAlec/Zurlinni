import React from 'react'
import  './style.css'

export default function Page({current, next, children}) {


  return (
    <div  className={`
        page
        ${current ? 'current' : ''}
        ${next ? 'next' : ''}
      `}>
        {children}
    </div>
  )
}
