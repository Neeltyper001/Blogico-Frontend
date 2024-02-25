import React from 'react'
import './index.css'
import Close from '../../UI/Close/Close.js'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import MenuContext from '../../../Contexts/MenuContext.js'
import { LoginContext } from '../../../Contexts/Context.js'

const Menu = () => {
  const {handleToggleMenu,handleLogOut} = useContext(MenuContext);
  const {user} = useContext(LoginContext);  
  return (
    <div className='menu'>
      
        <Close/>
            <ul className='menu-list'>
                <NavLink onClick={()=>{ handleToggleMenu()}} to='blogposts'><li>Home</li></NavLink>
                <NavLink onClick={()=>{ handleToggleMenu()}} to='about'><li>About</li></NavLink>
                <NavLink onClick={()=>{ handleToggleMenu()}} to='#'><li>Contact</li></NavLink>            
                <NavLink onClick={()=>{ handleToggleMenu()}} to='write'><li>Write</li></NavLink>   
                {
                  !user ?
                  <>
                    <NavLink onClick={()=>{ handleToggleMenu()}} to='login'><li>Login</li></NavLink>            
                    <NavLink onClick={()=>{ handleToggleMenu()}} to='register'><li>Register</li></NavLink>            
                  </>
                        :
                    <NavLink onClick={()=>{ handleToggleMenu(); handleLogOut()}} to='/'><li>Logout</li></NavLink>   
                  
                }         
            </ul>
    </div>
  )
}

export default Menu