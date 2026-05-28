import React from 'react'
import  './style.css'

export default function Page({children}) {


  return (
    <div  className={`page`}>
        {children}
    </div>
  )
}
