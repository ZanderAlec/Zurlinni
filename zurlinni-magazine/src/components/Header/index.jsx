import React from 'react'
import './header.css'
import logo from '../../assets/Logo.png'

export default function Header() {
  return (
    <header className="header-container">
        <div className='logo-container'>
             <img className="logo" src = {logo} alt = "zurlinni"/>
        </div>
    </header>
  )
}
