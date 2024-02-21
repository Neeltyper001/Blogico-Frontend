import React from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
 
const CreatePost = () => {
  return (
    <div className='create-post-container'>
        <img className='new-post-image' src='https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8fDA%3D' alt='new-post' />
        <form className='create-post-form'>
            <div className='create-post-form-head'>
                <label htmlFor='fileInput'><FontAwesomeIcon className="plus-icon" icon={faPlus} /></label>
                <input type='file' id='fileInput' hidden={true} />
                <input type='text' placeholder='Title...' className='new-post-input' autoFocus={true} />
            </div>
            <div className='create-post-form-tail'>
                <textarea placeholder='Write your story...' type='text' className='new-post-input new-post-text'></textarea>
            </div>
            <button className='publish'>Publish</button>
        </form>
    </div>
  )
}

export default CreatePost