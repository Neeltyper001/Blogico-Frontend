import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import UserLogin from '../../../Contexts/userLogin.js'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'

const Navbar = () => {
  // const {isLoggedIn} = useContext(UserLogin);
  const {user,dispatch} = useContext(LoginContext)
  const isLoggedIn = false;

  const handleLogOut = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (    
        <nav className='nav-bar'>
            <ul className='nav-links'>
               <NavLink to='/'><li>HOME</li></NavLink> 
               <NavLink to='sidebar'><li>ABOUT</li></NavLink> 
               <NavLink to='#'><li>CONTACT</li></NavLink>
               <NavLink to='write'><li>WRITE</li></NavLink>
            </ul>

            <div className='profiles'>
                {
                    user ? 
                      <>
                        <span className='logout' onClick={handleLogOut}>LOGOUT</span>
                        <NavLink to='settings'><img className='profile-pic' src='https://plus.unsplash.com/premium_photo-1708110769673-c97bb8d17453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D' alt='laila' /></NavLink>
                      </>
                      :
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