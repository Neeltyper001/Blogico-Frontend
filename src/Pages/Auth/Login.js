import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { useRef,useContext } from 'react'
import { LoginContext } from '../../Contexts/Context.js'
import axios from 'axios'

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {user,dispatch, isFetching} = useContext(LoginContext);

const handleLoginSubmit = async(e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"});      
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login',{
          username: usernameRef.current.value,
          password: passwordRef.current.value
        });
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
      } catch (error) {
        dispatch({type:"LOGIN_FAILURE"})
      }
}

  console.log(isFetching);

  return (
    <div className='form-container'>
        <span className='login-title'>LOGIN</span>
        <form onSubmit={handleLoginSubmit} className='login-form'>
            <label htmlFor='username'>Username</label>
            <input  className='fields' type='text' placeholder='enter your username...' ref={usernameRef}/>
            <label htmlFor='password'>Password</label>
            <input className='fields' type='password' placeholder='enter your password...' ref={passwordRef}/>
            <button className='submit'>Submit</button>
        </form>
        <NavLink className={'register-nav'} to='/register'><button className='register-option-button'>REGISTER</button></NavLink>
    </div>
  )
}

export default Login