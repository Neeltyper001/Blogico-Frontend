import React from 'react'
import Header from '../Components/General/Header/Header.js'
import Main from '../Components/General/Main/Main.js'
import Footer from '../Components/General/Footer/Footer.js'
import UserLogin from '../Contexts/userLogin.js'
import { useContext } from 'react'
import { LoginContext } from '../Contexts/Context.js'
const Homelayout = () => {
    const isLoggedIn = false;
    const {user} = useContext(LoginContext)
  // const {isLoggedIn} = useContext(UserLogin);
  return (
    <>
      <Header />
      {user && <Main/>} 
      <Footer />      
    </>   
  )
}

export default Homelayout