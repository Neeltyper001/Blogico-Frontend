import React from 'react'
import './index.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Timeformat from '../../Utils/Timeformat.js'
import { useContext } from 'react'
import { LoginContext } from '../../../Contexts/Context.js'
import { BACKEND_URL } from '../../../assets/global.js'

const Blogpost = () => {
    const {id} = useParams();
    const [blogPost , setBlogPost] = useState({})
    const publicFolder = `${BACKEND_URL}/images/`
    const {user} = useContext(LoginContext);

    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    const [updateMode , setUpdateMode] = useState(false)


    useEffect(()=>{
        const getBlogPostData = async ()=>{
            const res = await axios.get(`${BACKEND_URL}/api/posts/${id}`)
            console.log(res.data);
            setBlogPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }

        getBlogPostData();

    },[])

    const {photo,createdAt,username} = blogPost;      
      
    const handleDelete = async()=>{
        try {
            const res = await axios.delete(`${BACKEND_URL}/api/posts/${id}`,{
                data: {username: user.username}
            })
            console.log(res)
            setUpdateMode(false)
        } catch (error) {
            
        }
    }

    const handleUpdate = async()=>{
        try {
            const res = await axios.put(`${BACKEND_URL}/api/posts/${id}`,{               
                    username: user.username,
                    title,
                    desc
                
            })

            window.location.reload()
        } catch (error) {
            
        }
    }
    

  return (
    <div className='blog-post-container'>
        <img className='blog-post-image' src={photo} alt={title} />
        <div className='blog-post-title-section'>

            {updateMode ? <input className='blog-post-title-input' autoFocus={true} type='text' value={title}  onChange={(e)=>{setTitle(e.target.value)}} /> : <h1 className='blog-post-title'>{title}</h1>}
            
            {username === user?.username 
                        && 
                <div className='post-ops'>
                    <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={()=>{setUpdateMode(true)}}/>
                    <FontAwesomeIcon className='trash' icon={faTrash} onClick={handleDelete} />
                </div>
            }
        </div>
        <div className='blog-post-details'>
            <p>Author:<NavLink to={`/?username=${username}`}><span className='author'>{username}</span></NavLink></p>
            <span>{Timeformat(createdAt)}</span>
        </div>
        {updateMode ? <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} className='blog-post-desc-input' /> : <p className='blog-post-desc'>{desc}</p> }
        {updateMode && <button className='blog-post-update-button' onClick={handleUpdate}>Update</button>}
    </div>
  )
}

export default Blogpost