import React from 'react'
import { Routes, Route } from "react-router-dom"
// import './App.css'
// import './responsive.css'
import Login_Mah from './LoginPage/Login_Maharashtra'
// import Dashboard from '../pages/dashboard'
import { ThemeColorProvider } from '../../components/layout/ThemeColors'

function Routes_Mah() {

 return (
      <ThemeColorProvider>
      <Routes>
        <Route path="/" element={<Login_Mah/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
      </ThemeColorProvider>
  )
}

export default Routes_Mah