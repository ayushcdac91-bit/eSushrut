import React from 'react'
import { Routes, Route } from "react-router-dom"
// import './App.css'
// import './responsive.css'
import Login_Himachal from './LoginPage/Login_Himachal'
import Dashboard from '../../extra/dashboard'
import { ThemeColorProvider } from '../../components/layout/ThemeColors'

function Routes_HP() {

 return (
      <ThemeColorProvider>    
      <Routes>
        <Route path="/" element={<Login_Himachal/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </ThemeColorProvider>
  )
}

export default Routes_HP