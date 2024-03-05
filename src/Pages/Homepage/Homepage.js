import React from 'react'
import './index.css'
import Navbar from '../../Components/General/Navbar/Navbar.js'
import { Outlet } from 'react-router-dom'
import Loading from '../../Components/UI/Loading/Loading.js'
import LoadingContext from '../../Contexts/LoadingContext.js'
import { useState } from 'react'

const Homepage = () => {
  const [isLoading , setIsloading] = useState(false)

  const handleLoading = ()=>{
    setIsloading(prev => {return !prev})
  }
  return (
    <LoadingContext.Provider value={{handleLoading}}>
          <div className='home-page'>
              <Navbar/>    
              <Outlet/>  
              {isLoading && <Loading/>}
          </div>
  </LoadingContext.Provider>
  )
}

export default Homepage