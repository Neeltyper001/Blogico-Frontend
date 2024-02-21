import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage.js'
import Sidebar from '../Components/General/Sidebar/Sidebar.js'
import Blogpost from '../Components/General/Blogpost/Blogpost.js'
import Homelayout from '../Layouts/Homelayout.js'
import Login from '../Pages/Auth/Login.js'
import Register from '../Pages/Auth/Register.js'
import CreatePost from '../Pages/CreatePost/CreatePost.js'
import UserSettings from '../Pages/UserSettings/UserSettings.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} >  
          <Route index element={<Homelayout/>}   />     
          <Route path='sidebar' element={<Sidebar/>}/> 
          <Route path='blogposts' element={<Homelayout/>} />
          <Route path='blogposts/:id' element={<Blogpost/>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login/>} />
          <Route path='write' element={<CreatePost/>} />
          <Route path='settings' element={<UserSettings />} />
        </Route>                 
      </Routes>
    
    </BrowserRouter>
  )
}

export default Router