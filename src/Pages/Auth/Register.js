import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
const Register = () => {
  return (
    <div className='form-container'>
        <span className='register-title'>REGISTER</span>
        <form action='/submit' className='register-form'>
            <label htmlFor='username'>Username</label>
            <input  className='fields' type='text' placeholder='enter your username...'/>
            <label htmlFor='email'>Email</label>
            <input  className='fields' type='email' placeholder='enter your email...'/>
            <label htmlFor='password'>Password</label>
            <input className='fields' type='password' placeholder='enter your password...' />
            <button className='submit'>Submit</button>
        </form>
        <NavLink className={'login-nav'} to='/login'><button className='login-option-button'>LOGIN</button></NavLink>
    </div>
  )
}

export default Register