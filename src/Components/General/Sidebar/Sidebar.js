import React from 'react'
import './index.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-profile'>
            <span className='sidebar-title'>ABOUT ME</span>
            <img className='sidebar-profile-pic' src='https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' alt='#' />
            <p>In pariatur aliquip amet cupidatat ex nulla do nulla amet veniam irure veniam dolor minim. Incididunt eu sint ut officia.              
            </p>
        </div>
        
        <div className='sidebar-categories'>
           <span className='sidebar-title'>CATEGORIES</span>
            <ul className='sidebar-list'>
              <li className='sidebar-item'>Life</li>
              <li className='sidebar-item'>Music</li>
              <li className='sidebar-item'>Style</li>
              <li className='sidebar-item'>Sports</li>
              <li className='sidebar-item'>Cinema</li>
              <li className='sidebar-item'>Tech</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar