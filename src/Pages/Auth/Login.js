import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className='form-container'>
        <span className='login-title'>LOGIN</span>
        <form className='login-form'>
            <label htmlFor='email'>Email</label>
            <input  className='fields' type='email' placeholder='enter your email...'/>
            <label htmlFor='password'>Password</label>
            <input className='fields' type='password' placeholder='enter your password...' />
            <button className='submit'>Submit</button>
        </form>
        <NavLink className={'register-nav'} to='/register'><button className='register-option-button'>REGISTER</button></NavLink>
    </div>
  )
}

export default Login