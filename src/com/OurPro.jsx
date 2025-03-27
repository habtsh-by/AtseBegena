import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import './Ourpro.css'
import image1 from "../assets/img/img1.png"; // Replace with correct image paths
import image2 from "../assets/img/img2.png";
import image3 from "../assets/img/img3.png";
import img from '../assets/img/col-md-6.png'



const products = [
  {
    id: 1,
    title: "ጥቁር የተሳነ ተስማሚ",
    category: " ዘማሪት",
     image: image1,
     icon: (
      <>
        <FaFacebook /> <FaInstagram /> <FaTwitter />
      </>
    )
  },
  {
    id: 2,
    title: "ማህበራዊ መጻሕፍት",
    category: " ዘማሪት",
    image: image2,
    icon: (
      <>
        <FaFacebook /> <FaInstagram /> <FaTwitter />
      </>
    )
  },
  {
    id: 3,
    title: "ቢሮ መሳሪያዎች",
    category: " ዘማሪት",
     image: image3,
     icon: (
      <>
        <FaFacebook /> <FaInstagram /> <FaTwitter />
      </>
    )
  },
  {
    id: 4,
    title: "ቢሮ መሳሪያዎች",
    category: " ዘማሪት",
     image: image3,
     icon: (
      <>
        <FaFacebook /> <FaInstagram /> <FaTwitter />
      </>
    )
  },
];

function OurPro() {
  return (
   
    <section className="product-section1">
    <h2>የእኛ ተወዳጅ አስተማሪዎች</h2>

    <div className="product-container1">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="card-content">
            
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <div className="card-actions">
              <a href="#" className="social-icons">{product.icon}</a>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
    
  )
}

export default OurPro