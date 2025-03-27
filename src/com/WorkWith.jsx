import React from 'react'
import './WorkWith.css'
import logo1 from "../assets/img/fa-brands-1.png"; 
import logo2 from "../assets/img/fa-brands-2.png"; 
import logo3 from "../assets/img/fa-brands-3.png"; 
import logo4 from "../assets/img/fa-brands-4.png";
import logo5 from "../assets/img/fa-brands-5.png";
import logo6 from "../assets/img/fa-brands-6.png";
 
function WorkWith() {
  return (
    <div className="companies-container">
      <img src={logo1} alt="Company 1" className="company-logo" />
      <img src={logo2} alt="Company 2" className="company-logo" />
      <img src={logo3} alt="Company 3" className="company-logo" />
      <img src={logo4} alt="Company 4" className="company-logo" />
      <img src={logo5} alt="Company 5" className="company-logo" />
      <img src={logo6} alt="Company 6" className="company-logo" />
     
    </div>
  )
}

export default WorkWith