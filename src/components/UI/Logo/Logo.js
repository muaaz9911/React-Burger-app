import React from 'react'
import burgerLogo from '../../../assets/images/burger-logo.png.png'
// src\assets\images\27.1 burger-logo.png.png
import './Logo.css'

function Logo() {
    return (
        <div className='Logo'>
              <img className='Logo ' src ={burgerLogo} ></img>
        </div>
    )
}

export default Logo
