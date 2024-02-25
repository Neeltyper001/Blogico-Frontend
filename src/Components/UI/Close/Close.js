import React from 'react'
import './index.css'
import { useContext } from 'react'
import MenuContext from '../../../Contexts/MenuContext.js'
const Close = () => {
    const {handleToggleMenu} = useContext(MenuContext);
  return (
    <button onClick={()=>{handleToggleMenu()}} className='close-button'>
        <div></div>
        <div></div>
    </button>
  )
}

export default Close