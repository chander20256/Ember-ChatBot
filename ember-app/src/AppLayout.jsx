import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/globalcomp/navbar'



const AppLayout = () => {
  return (
    <>
  <div className='responsivewidth'>

      <Navbar/>
  </div>
   
    <Outlet/>
     {/* <Footer/> */}
  
      
    </>
  )
}

export default AppLayout
