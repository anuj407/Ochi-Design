/* eslint-disable no-unused-vars */
// import React from 'react'

import About from "./Components/About"
import Cards from "./Components/Cards"
import EyesComp from "./Components/EyesComp"
import Featured from "./Components/Featured"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandingPage"
import Loader from "./Components/Loader"
import Marquee from "./Components/Marquee"
import Navbar from "./Components/Navbar"
import StartProject from "./Components/StartProject"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-screen min-h-screen bg-zinc-950 text-white pb-2">
      <Loader/>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <EyesComp/>
      <Featured/>
      <Cards/>
      <StartProject/>
      <Footer/>
    </div>
  )
}

export default App