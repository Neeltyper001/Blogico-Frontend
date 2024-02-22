import React from 'react'
import './index.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Db from '../../../db.json'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Timeformat from '../../Utils/Timeformat.js'

const Blogpost = () => {
    const {id} = useParams();
    const [blogPost , setBlogPost] = useState({})

    useEffect(()=>{
        const getBlogPostData = async ()=>{
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`)
            console.log(res.data);
            setBlogPost(res.data)
        }

        getBlogPostData();

    },[])

    const {title,desc,image,createdAt,username} = blogPost;   
      
  return (
    <div className='blog-post-container'>
        <img className='blog-post-image' src={image} alt={title} />
        <div className='blog-post-title-section'>
            <h1>{title}</h1>
            <div className='post-ops'>
                <FontAwesomeIcon className='edit' icon={faPenToSquare} />
                <FontAwesomeIcon className='trash' icon={faTrash} />
            </div>
        </div>
        <div className='blog-post-details'>
            <p>Author:<NavLink to={`/?username=${username}`}><span className='author'>{username}</span></NavLink></p>
            <span>{Timeformat(createdAt)}</span>
        </div>
        <p className='blog-post-desc'>{desc}{`id: ${id}`}</p>
    </div>
  )
}

export default Blogpost