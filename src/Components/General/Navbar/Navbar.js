import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'
import MenuContext from '../../../Contexts/MenuContext.js'
import { useState,useEffect } from 'react'
import Burger from '../../UI/Burger/Burger.js'
import Menu from '../Menu/Menu.js'
import { BACKEND_URL } from '../../../assets/global.js'

const Navbar = () => {
  
  const [isMobile, setIsMobile] = useState(false);  
  const [toggleMenu, setToggleMenu] = useState(false);
  const {user,dispatch} = useContext(LoginContext)  
  // console.log(user);


  const handleResize = ()=>{
    setIsMobile(window.innerWidth <= 768);    
  }

  const handleToggleMenu = ()=>{
    setToggleMenu(currToggle => { return !currToggle } );
  }

  useEffect(()=>{
    handleResize();
    window.addEventListener('resize' , handleResize);

    return ()=>{
      window.removeEventListener('resize' , handleResize);
    }

  },[]);
  

  const handleLogOut = ()=>{
    dispatch({type:"LOGOUT"})    
  }
  return (    
        <nav className='nav-bar'>
            {
              toggleMenu && isMobile && 
                <MenuContext.Provider value={{handleToggleMenu,isMobile,handleLogOut}}>
                  <Menu />
                </MenuContext.Provider>
            }
            <ul className='nav-links'>
              {
                isMobile ? <Burger eventReg={handleToggleMenu} /> :
                <>
                  <NavLink to='/'><li>HOME</li></NavLink> 
                  <NavLink to='about'><li>ABOUT</li></NavLink> 
                  <NavLink to='#'><li>CONTACT</li></NavLink>
                  <NavLink to='write'><li>WRITE</li></NavLink>                
                </>
              }
            </ul>

            <div className='profiles'>
                {
                    user ? 
                      <>
                       { !isMobile && <NavLink to='/'><span className='logout' onClick={handleLogOut}>LOGOUT</span></NavLink>}
                        <NavLink to='settings'>{user.profilePic ? <img className='profile-pic' src={user.profilePic} alt={user.username} /> : <FontAwesomeIcon className='profile-pic-icon' icon={faUser} />}</NavLink>
                      </>
                      :
                      
                     !isMobile &&
                      <>                             
                          <NavLink to='login'><span className='login'>LOGIN</span></NavLink>
                          <NavLink to='register'><span className='register'>REGISTER</span></NavLink>                                                        
                      </>
                }
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
        </nav>    
  )
}

export default Navbar