import React from 'react'
// import {NavLink} from "react-router-dom"
import Common from './Common'
import web from "../src/images/OIP.jpeg"
const About = () => {
  return (
   <>
<Common name='Welcome to About page' imgsrc={web} visit="/contact" btname="Contact Now"/>
   </>
  )
}

export default About;
