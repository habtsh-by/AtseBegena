import React from "react";
import "./ourSer.css";
import image1 from "../assets/img/img1.png"; // Replace with correct image paths
import image2 from "../assets/img/img2.png";
import image3 from "../assets/img/img3.png";

const products = [
  {
    id: 1,
    title: "ጥቁር የተሳነ ተስማሚ",
    category: "የስእላት ኮሌክሽን",
    description: "እቃ ትምህርት እና መጽሀፍት ዳሰሳ ለቤተሰብ እና ተማሪዎች።",
    image: image1,
  },
  {
    id: 2,
    title: "ማህበራዊ መጻሕፍት",
    category: "አስተማማኝ ዲዛይን",
    description: "እቃ ትምህርት እና መጽሀፍት ዳሰሳ ለቤተሰብ እና ተማሪዎች።",
    image: image2,
  },
  {
    id: 3,
    title: "ቢሮ መሳሪያዎች",
    category: "የትምህርት መሳሪያዎች",
    description: "እቃ ትምህርት እና መጽሀፍት ዳሰሳ ለቤተሰብ እና ተማሪዎች።",
    image: image3,
  },
];

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product_text">    
      <h2>የእኛ ባለሙያዎች አስተማሪ</h2>
      <p>መካከል ያለውን ግጭት ለመፍታት በመሞከር ላይ ችግሮች የክላሲካል ፊዚክስ ዋና ዋና ግዛቶች-ኒውቶኒያን ሜካኒክስ</p>
      </div>
      
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <span className="badge">Sale</span>
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <p className="category">{product.category}</p>
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
              <div className="card-actions">
                <a href="#" className="learn-more">Learn More →</a>
                <button className="favorite">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
