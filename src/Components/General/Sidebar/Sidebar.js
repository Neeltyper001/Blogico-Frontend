import React from 'react'
import './index.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'
import Timeformat from '../../Utils/Timeformat.js'
const Sidebar = () => {
  const {user} = useContext(LoginContext);
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const getCategories = async() =>{
        const res = await axios.get('http://localhost:5000/api/categories')
        console.log(res.data);
        setCategories(res.data);
    }
    getCategories();
  },[])

  const categoriesArr = categories.length > 0 ? categories.map((category,index)=>{
      return <NavLink to={`/?category=${category.name}`}><li key={index} className='sidebar-item'>{category.name}</li></NavLink>
  })
  : <li className='sidebar-item'>No categories so far...</li>
  return (
    <div className='sidebar'>
        <div className='sidebar-profile'>
            <span className='sidebar-title'>ABOUT ME</span>
            <img className='sidebar-profile-pic' src='https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' alt='#' />
            <p><span className='sidebar-profile-user'>{`${user.username}`} </span> { ` is been a user since `} <span className='sidebar-profile-joined'>{`${Timeformat(user.createdAt)}`}</span>
            </p>
        </div>
        
        <div className='sidebar-categories'>
           <span className='sidebar-title'>CATEGORIES</span>
            <ul className='sidebar-list'>
                {categoriesArr}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar