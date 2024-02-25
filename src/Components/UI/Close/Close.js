import React from 'react'
import './index.css'
import { useContext } from 'react'
import MenuContext from '../../../Contexts/MenuContext.js'
const Close = () => {
    const toggleMenu = useContext(MenuContext);
  return (
    <button onClick={()=>{toggleMenu()}} className='close-button'>
        <div></div>
        <div></div>
    </button>
  )
}

export default Close