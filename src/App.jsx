import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./com/Navbar";
import About from "../src/pages/About"; // Import About page
import Home from "../src/pages/Home"; // Import Home page
import Services from "../src/pages/Service"; // Import Services page
import Register from "../src/pages/Register"
import Footer from "./com/Footer";
import { LanguageProvider } from './com/LanguageContext';
import Contact from "./pages/Contact";

const App = () => {
  return (
    
    <Router>
     <LanguageProvider>
         <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} /> 
      </Routes>
      <Footer/>
      </LanguageProvider> 
    </Router>
  );
};

export default App;
