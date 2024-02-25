import React from 'react'
import './index.css'
import Close from '../../UI/Close/Close.js'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import MenuContext from '../../../Contexts/MenuContext.js'
const Menu = () => {
  const toggleMenu = useContext(MenuContext)
  return (
    <div className='menu'>
      
        <Close/>
            <ul className='menu-list'>
                <NavLink onClick={()=>{ toggleMenu()}} to='blogposts'><li>Home</li></NavLink>
                <NavLink onClick={()=>{ toggleMenu()}} to='about'><li>About</li></NavLink>
                <NavLink onClick={()=>{ toggleMenu()}} to='#'><li>Contact</li></NavLink>            
                <NavLink onClick={()=>{ toggleMenu()}} to='write'><li>Write</li></NavLink>            
                <NavLink onClick={()=>{ toggleMenu()}} to='login'><li>Login</li></NavLink>            
                <NavLink onClick={()=>{ toggleMenu()}} to='register'><li>Register</li></NavLink>            
            </ul>
    </div>
  )
}

export default Menu