import React from 'react'
import './index.css'
import Blog from '../Blog/Blog.js'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { BACKEND_URL } from '../../../assets/global.js'
import LoadingContext from '../../../Contexts/LoadingContext.js'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const {search} = useLocation();
  const {handleLoading} = useContext(LoadingContext);

  useEffect(()=>{
    
    const getBlogs = async ()=>{
      handleLoading();
      try {        
        const res = await axios.get(`${BACKEND_URL}/api/posts`+search)      
        setBlogs(res.data);
        handleLoading();
      } catch (error) {
        console.log(error)
        handleLoading();
      }

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