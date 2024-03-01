import React from 'react'
import './index.css'
import Blog from '../Blog/Blog.js'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { BACKEND_URL } from '../../../assets/global.js'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const {search} = useLocation();
  
  useEffect(()=>{

    const getBlogs = async ()=>{
      const res = await axios.get(`${BACKEND_URL}/api/posts`+search)      
      setBlogs(res.data);
    }
    getBlogs();
  },[search])
  const blogsArr = blogs.map((blog,index)=>{
    return (
      <Blog
        key = {index}
        id={blog._id}
        title = {blog.title}
        desc = {blog.desc}
        image = {blog.photo}
        time = {blog.createdAt}
        categories={blog.categories}
        />
    )
  })
  
  return (
    <div className='blogs'>
      {blogsArr}
    </div>
  )
}

export default Blogs