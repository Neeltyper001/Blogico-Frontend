import React from 'react'
import Header from '../Components/General/Header/Header.js'
import Main from '../Components/General/Main/Main.js'
import UserLogin from '../Contexts/userLogin.js'
import { useContext } from 'react'

const Homelayout = () => {
  const {isLoggedIn} = useContext(UserLogin);
  return (
    <>
      <Header />
      {isLoggedIn && <Main/>}       
    </>   
  )
}

export default Homelayout