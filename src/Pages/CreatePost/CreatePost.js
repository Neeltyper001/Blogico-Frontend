import React, { useContext } from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import axios from 'axios';
import { LoginContext } from '../../Contexts/Context';
import Footer from '../../Components/General/Footer/Footer.js';
import { BACKEND_URL } from '../../assets/global.js';
import LoadingContext from '../../Contexts/LoadingContext.js';

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(LoginContext)
  const {handleLoading} = useContext(LoadingContext);

  const handlePostSubmit = async (e)=>{
    e.preventDefault();
    handleLoading();    
    const newPost = {
      username: user.username,
      title,
      desc
    };

    if(file){
      const data = new FormData();      
      const filename = Date.now() + file.name;      
      data.append("name",filename);
      data.append("file",file);  
      data.append("username",user.username)  
      data.append("upload_asset_type","posts")
      try {        
       const res =  await axios.post(`${BACKEND_URL}/api/uploads/`, data);  
      //  console.log(res.data);
       newPost.photo = res.data;
      } catch (error) {
        console.log(error)
      }
    }

    try {
    const res = await axios.post(`${BACKEND_URL}/api/posts`,newPost);    
      handleLoading();
      window.location.replace(`/blogposts/${res.data._id}`)  
    } catch (error) {
      handleLoading();
      console.log(error)
    }
  }

  return (
    <>
    {
      user ? 
      <div className='create-post-container'>
         {file &&  <div className='new-post-image-container'>
          <img className='new-post-image' src={URL.createObjectURL(file)} alt='new-post' /></div>
          }
          <form className='create-post-form' onSubmit={handlePostSubmit}>
                  {/* {isLoading && <Loading />} */}
              <div className='create-post-form-head'>
                  <label htmlFor='fileInput'><FontAwesomeIcon className="plus-icon" icon={faPlus} /></label>
                  <input type='file' id='fileInput' hidden={true}  onChange={e=>setFile(e.target.files[0])}/>
                  <input type='text' placeholder='Title...' className='new-post-input' autoFocus={true} onChange={e=>setTitle(e.target.value)} />
              </div>
              <div className='create-post-form-tail'>
                  <textarea placeholder='Write your story...' type='text' className='new-post-input new-post-text' onChange={e=>setDesc(e.target.value)}></textarea>
              </div>
              <button className='publish' type="submit">Publish</button>
          </form>
      </div>

      : 

      <div className='create-post-cover-container'>
          <img className='create-post-image' src='images/write-cover.jpg' alt='#' />
          <span className='create-post-para'>Login to enlighten your words</span>
          <Footer/>
      </div>
    }

    </>
  )
}

export default CreatePost