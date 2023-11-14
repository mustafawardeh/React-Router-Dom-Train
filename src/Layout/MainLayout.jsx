import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

const MainLayout = () => {
  return (
    <div className='relative'>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout