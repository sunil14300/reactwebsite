import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
// import web from "../src/images/OlP.jpg";
import web from "../src/images/OIP.jpeg"
import Common from './Common'

const Home = () => {
    const location =useLocation();

  return (
   <>
   
   <Navbar/>
{location.pathname==="/"&&(
  <Common name='Grow your business with' imgsrc={web} visit="/service" btname="Get Started"/>
)}
   <Outlet/>
<Footer/>
   </>
  )
}

export default Home;

