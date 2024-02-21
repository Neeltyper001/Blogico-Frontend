import React from 'react'
import './index.css'
import Db from '../../../db.json'
import Blog from '../Blog/Blog.js'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{

    const getBlogs = async ()=>{
      const res = await axios.get('http://localhost:5000/api/posts')
      console.log(res.data)
      setBlogs(res.data);
    }
    getBlogs();
  },[])
  const blogsArr = blogs.map((blog,index)=>{
    return (
      <Blog
        key = {index}
        id={blog._id}
        title = {blog.title}
        desc = {blog.desc}
        image = {blog.image}
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