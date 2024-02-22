import React from 'react'
import './index.css'
import Navbar from '../../Components/General/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
        <Navbar/>    
        <Outlet/>            
    </>
  )
}

export default Homepage