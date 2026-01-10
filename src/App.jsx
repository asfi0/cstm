import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeCollege from './pages/Home-clg.jsx';
import AboutPage from './pages/About.jsx';
import Contact from './pages/Contact';
import ProgramsPage from './pages/Programms.jsx';
import Faculty from './pages/Faculty.jsx';
import axios from 'axios';
import Admissions from './pages/Admissions.jsx';
import Navbar from './components/NavbarClg.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
const [location, setLocation] = useState()
const [openDropdown, setOpenDropdown] = useState(false);


  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition(async pos =>{
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude);

const url =`https://us1.locationiq.com/v1/reverse?key=pk.a8ae0066c2f58654e1f3670bede05cca&lat=${latitude}&lon=${longitude}&format=json`
try {
  const location = await axios.get(url)
  const exactLocation = location.data.address
  setLocation(exactLocation)
  console.log(exactLocation);
  
  setOpenDropdown(false)

} catch (error) {
  console.log(error);
}

    }

    )
  }
  return (
    <BrowserRouter>
      <Navbar location={location} getLocation = {getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}></Navbar>
    <Routes>
      <Route path='/' element={<HomeCollege/>}></Route>
      <Route path='/programs' element={<ProgramsPage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/admission' element={<Admissions/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/faculty' element={<Faculty/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
