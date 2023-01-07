import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/global.css'
import { Register } from './User/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './User/Login'
import { GamesHome } from './Pages/GamesHome'
import { HomeCod } from './Pages/Cod/Home'
import { Posts } from './Pages/Cod/Posts'
import { Videos } from './Pages/Cod/Videos'
import { Friends } from './Pages/Cod/Friends'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}/>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/games' element={<GamesHome />}/>

    
      <Route path='/callofduty' element={<HomeCod />}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/videos' element={<Videos />}/>
      <Route path='/amigos' element={<Friends />}/>

      
      
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
