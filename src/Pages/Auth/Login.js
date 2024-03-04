import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { useRef,useContext,useState } from 'react'
import { LoginContext } from '../../Contexts/Context.js'
import axios from 'axios'
import { BACKEND_URL } from '../../assets/global.js'
import Loading from '../../Components/UI/Loading/Loading.js'

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loginError , setLoginError] = useState(false)
  const {user, dispatch, isFetching} = useContext(LoginContext);
  const [isLoading , setIsLoading] = useState(false);

const handleLoginSubmit = async(e)=>{
      e.preventDefault();
      setIsLoading(true);
      setLoginError(false)
      dispatch({type:"LOGIN_START"});      
      try {
        const res = await axios.post(`${BACKEND_URL}/api/auth/login`,{
          username: usernameRef.current.value,
          password: passwordRef.current.value
        });

        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        setIsLoading(false)
        window.location.replace('/blogposts')
      } catch (error) {
        dispatch({type:"LOGIN_FAILURE"})
        setLoginError(true);
        setIsLoading(false)
      }
}
  

  return (
    <div className='form-container'>
        <span className='login-title'>LOGIN</span>
        <form onSubmit={handleLoginSubmit} className='login-form'>
            {isLoading && <Loading />}
            <label htmlFor='username'>Username</label>
            <input  className='fields' type='text' placeholder='enter your username...' ref={usernameRef}/>
            <label htmlFor='password'>Password</label>
            <input className='fields' type='password' placeholder='enter your password...' ref={passwordRef}/>
            <button className='submit' type='submit' disabled={isFetching}>Login</button>
            {loginError && <span className='login-error'>Invalid credentials!</span>}
        </form>
        <NavLink className={'register-nav'} to='/register'><button className='register-option-button'>REGISTER</button></NavLink>
    </div>
  )
}

export default Login