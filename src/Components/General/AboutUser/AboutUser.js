import React from 'react'
import './index.css'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'
import Footer from '../Footer/Footer.js'
const AboutUser = () => {
    
  return (
    <div className='about-user-component'>

            <img className='about-image' src='images/about-cover.jpg' alt='#' />
            <p className='about-user-span'>
                Welcome to our blogging platform! This space is crafted with a passion for clean and functional web development. As computer science students, we're dedicated to creating a seamless experience for bloggers.
                Our project incorporates the latest technology based on MERN stack that stands for MONGODB, EXPRESS, REACT and NODEJS. It's a reflection of our commitment to staying at the forefront of software development.
                Explore the simplicity and power of our blogging application. Share your thoughts effortlessly, and let's make the digital writing experience exceptional together. Happy blogging!"
            </p>                                     
        <Footer />
    </div>
  )
}

export default AboutUser