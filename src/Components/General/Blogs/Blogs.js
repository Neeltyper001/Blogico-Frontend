import React from 'react'
import './index.css'
import Blog from '../Blog/Blog.js'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const {search} = useLocation();
  const publicFolder = "http://localhost:5000/images/"
  useEffect(()=>{

    const getBlogs = async ()=>{
      const res = await axios.get('http://localhost:5000/api/posts'+search)
      console.log(res.data)
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
        image = {publicFolder+blog.photo}
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