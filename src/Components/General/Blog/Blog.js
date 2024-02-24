import React from 'react'
import './index.css'
import Category from '../../UI/Category/Category.js'
import { NavLink } from 'react-router-dom'
import Timeformat from '../../Utils/Timeformat.js'

const Blog = ({id , image, title, desc, time, categories }) => {    

    const categoriesArr = categories.map((category, index)=>{
        return (
            <Category key={index} categoryName={category}/>
        )
    })


  return (
   <NavLink to={`blogposts/${id}`}>
        <div className='blog-container'>
            <div className='blog-body'>
                <img  className='blog-image' src={image} alt={title} />
                <h1 className='blog-title'>{title}</h1>
                <p className='blog-desc'>{desc}</p>
            </div>
        <div className='blog-tail'>
                <p className='blog-time'>Posted: <time >{Timeformat(time)}</time></p>
                <div className='categories-container'>
                    {categoriesArr}
             </div>
            </div>
        </div>
   </NavLink> 
  )
}

export default Blog