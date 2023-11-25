import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import { Outlet } from 'react-router-dom'

export default function DashBoardLayout() {
  return (
    <>
    
    <Navbar />
    <Outlet /> 
    <Footer />
    </>
  )
}
