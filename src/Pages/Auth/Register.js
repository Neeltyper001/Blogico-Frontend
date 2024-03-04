import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../../assets/global.js'
import Loading from '../../Components/UI/Loading/Loading.js'

const Register = () => {
  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState(false);
  const [isLoading , setIsLoading] = useState(false);

  const handleSubmit = async (e)=>{
      e.preventDefault();
      setIsLoading(true);
      setError(false);
      try {        
        const res = await axios.post(`${BACKEND_URL}/api/auth/register`,{
          username,
          email,
          password
        });
          
        if(res.data){
          setIsLoading(false);
        }
        res.data && window.location.replace('/login');
      } catch (error) {
        console.log(error.response.data.message)
        setUsername('')
        setEmail('')
        setPassword('')
        setError(true)
        setIsLoading(false);
      }
  }

  return (
    <div className='form-container'>
        <span className='register-title'>REGISTER</span>
        <form onSubmit={handleSubmit} className='register-form'>
          {isLoading && <Loading />}
            <label htmlFor='username'>Username</label>
            <input  className='fields' type='text' placeholder='enter your username...' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label htmlFor='email'>Email</label>
            <input  className='fields' type='email' placeholder='enter your email...' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor='password'>Password</label>
            <input className='fields' type='password' placeholder='enter your password...' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className='submit'>Submit</button>
            {error && <span className='error-span'>Something went wrong !</span>}
        </form>
        <NavLink className={'login-nav'} to='/login'><button className='login-option-button'>LOGIN</button></NavLink>
    </div>
  )
}

export default Register