import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Navbar from  "./components1/Navbar"
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components1/ProtectedRoute'

const App = () => {
  return (
    <>
   <AuthContextProvider> 
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/profile" element={<ProtectedRoute>
      <Profile/>
    </ProtectedRoute>}/>
   </Routes>
   
   </AuthContextProvider>
   </>

  )
}

export default App