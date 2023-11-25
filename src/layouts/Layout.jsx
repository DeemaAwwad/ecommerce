import React from 'react'
import Navbar from '../components/web/Navbar'
import Footer from '../components/web/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
   <>
   <Navbar />
   <Outlet />
   <Footer />

   
   </>
  )
}
