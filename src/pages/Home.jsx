import React from 'react'
import { LanguageProvider } from "../com/LanguageContext";
import Navbar from '../com/Navbar'
import Footer from '../com/Footer'
import Hero from '../com/Hero';
import Why from '../com/Why'
import WorkWith from '../com/WorkWith';
import AboutMin from '../com/AboutMin';
import OurPro from '../com/OurPro';
import OurSer from '../com/OurSer';
import FeedBack from '../com/FeedBack';
import AD from '../com/AD';
function Home() {
  return (
    <div>
       
        <Hero/>
        <WorkWith/>
        <Why/>
        <AboutMin/>
        <OurSer/>
        <FeedBack/>
        <OurPro/>
        <AD/>
        
        </div>
  )
}

export default Home