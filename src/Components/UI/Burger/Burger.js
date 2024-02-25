import React from 'react'
import './index.css'
const Burger = ({eventReg}) => {
  return (
    <button  onClick={eventReg} className='hamburger-button'>        
        <div></div>
        <div></div> 
        <div></div>
    </button>
  )
}

export default Burger