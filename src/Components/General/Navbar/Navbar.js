import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import UserLogin from '../../../Contexts/userLogin.js'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'

const Navbar = () => {
  // const {isLoggedIn} = useContext(UserLogin);
  const {user,dispatch} = useContext(LoginContext)
  const publicFolder = "http://localhost:5000/images/"
  console.log(user);

  const isLoggedIn = false;

  const handleLogOut = ()=>{
    dispatch({type:"LOGOUT"})    
  }
  return (    
        <nav className='nav-bar'>
            <ul className='nav-links'>
               <NavLink to='/'><li>HOME</li></NavLink> 
               <NavLink to='about'><li>ABOUT</li></NavLink> 
               <NavLink to='#'><li>CONTACT</li></NavLink>
               <NavLink to='write'><li>WRITE</li></NavLink>
            </ul>

            <div className='profiles'>
                {
                    user ? 
                      <>
                        <NavLink to='/'><span className='logout' onClick={handleLogOut}>LOGOUT</span></NavLink>
                        <NavLink to='settings'>{user.profilePic ? <img className='profile-pic' src={publicFolder + user.profilePic} alt={user.username} /> : <FontAwesomeIcon className='profile-pic-icon' icon={faUser} />}</NavLink>
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