import React from 'react'
import './index.css'
import { useState,useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../../Contexts/Context'
import { BACKEND_URL } from '../../assets/global.js'
import axios from 'axios'

const UserSettings = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSuccess, setSuccess] = useState(false);

    const {user,dispatch} = useContext(LoginContext)
    const publicFolder = `${BACKEND_URL}/images/`
    console.log(user)

    const handleUserUpdate = async (e)=>{
        e.preventDefault();
        setSuccess(false);
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
          userId: user._id,
          username,
          email,
          password
        };
    
        if(selectedImage){
          const data = new FormData();
          console.log(selectedImageFile)      
          const filename = Date.now() + selectedImageFile.name;      
          data.append("name",filename);
          data.append("file",selectedImageFile);
          data.append("username",user.username)  
          data.append("upload_asset_type","profile")
                                        
          try {        
            const res = await axios.post(`${BACKEND_URL}/api/uploads/`, data)
            updatedUser.profilePic = res.data;
        } catch (error) {
            console.log(error)
        }
    }
    
    try {
        const res = await axios.put(`${BACKEND_URL}/api/users/`+user._id,updatedUser);    
        setSuccess(true)
        dispatch({type:"UPDATE_SUCCESS", payload: res.data})
        console.log(res.data)            
    } catch (error) {
        console.log(error)
        dispatch({type:"UPDATE_FAILURE"})
        }
      }

    
    const handleProfileImageChange = (e)=>{
        const file = e.target.files[0];

        if(file){
            const reader = new FileReader();
            reader.onload = ()=>{ setSelectedImage(reader.result)}
            reader.readAsDataURL(file);
            setSelectedImageFile(file);
        }

    }
  return (
    <div className='User-settings'>
        <label className='user-settings-title'>User settings</label>

        <form className='user-update-form' onSubmit={handleUserUpdate}>
            {
                selectedImage ?<label className='user-profile-label' htmlFor='imageUpload'> <img className='user-profile-pic' src=
                {selectedImage} alt="Selected" /> </label>: 
                        
                user.profilePic ? <label className='user-profile-label' htmlFor='imageUpload'> <img className='user-profile-pic' src=
                {user.profilePic} alt="Selected" /> </label> : 
            
            <label className='user-profile-label' htmlFor='imageUpload'><FontAwesomeIcon className='user-profile-icon' icon={faUser} /></label>
            }
            
            <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={handleProfileImageChange}                
                className='preview-image'
            />
            <label htmlFor='username'>New username</label>
            <input type='text' placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
            <label htmlFor='username'>New email</label>
            <input type='email' placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor='password'>New password</label>
            <input type='password'  onChange={e=>setPassword(e.target.value)}/>
            <button className='update' type='submit'>Update Account</button>
        </form>
        {isSuccess && <span className='update-message'> User profile updated successfully! </span>}
        <button className='delete'>Delete Account</button>
    </div>
  )
}

export default UserSettings