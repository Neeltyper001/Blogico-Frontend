import React from 'react'
import './index.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const UserSettings = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleProfileImageChange = (e)=>{
        const file = e.target.files[0];

        if(file){
            const reader = new FileReader();
            reader.onload = ()=>{ setSelectedImage(reader.result)}
            reader.readAsDataURL(file);
        }
    }
  return (
    <div className='User-settings'>
        <label className='user-settings-title'>User settings</label>

        <form className='user-update-form'>
            {selectedImage ?<label className='user-profile-label' htmlFor='imageUpload'> <img className='user-profile-pic' src={selectedImage} alt="Selected" /> </label>: <label className='user-profile-label' htmlFor='imageUpload'><FontAwesomeIcon className='user-profile-icon' icon={faUser} /></label>}
            
            <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={handleProfileImageChange}                
                className='preview-image'
            />
            <label htmlFor='username'>New username</label>
            <input type='text' placeholder='New username...'/>
            <label htmlFor='username'>New email</label>
            <input type='email' placeholder='New email...'/>
            <label htmlFor='password'>New password</label>
            <input type='password' placeholder='New password...'/>
            <button className='update'>Update Account</button>
        </form>
        <button className='delete'>Delete Account</button>
    </div>
  )
}

export default UserSettings