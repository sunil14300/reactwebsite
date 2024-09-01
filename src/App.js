import React from 'react'

import Home from './Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './About';
import Service from './Service';
import Contact from './Contact';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    {/* nestted routing means all in home page*/}
<Route path="/" element={<Home/>} >
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/service" element={<Service/>}/>
</Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
