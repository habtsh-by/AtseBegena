import React, { useState } from "react";
import "./Ecomm.css";
import pro1 from '../assets/img/pro1 (1).jpeg';


const products = [
  { id: 1, name: "በገና", price: 1000, image: pro1 },
  { id: 2, name: "በገና", price: 500, image: pro1 },
  { id: 3, name: "በገና", price: 100, image: pro1 },
  { id: 4, name: "በገና", price: 100, image: pro1 },
  
];

export default function EcommercePage() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [receipt, setReceipt] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleOrder = () => {
    const orderDetails = cart.map(item => `${item.name} - $${item.price}`).join("%0A");
    const googleFormURL = `https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?usp=pp_url&entry.1234567890=${encodeURIComponent(name)}&entry.0987654321=${encodeURIComponent(phone)}&entry.1122334455=${encodeURIComponent(address)}&entry.5566778899=${encodeURIComponent(orderDetails)}&entry.6677889900=${encodeURIComponent(receipt ? receipt.name : "No receipt uploaded")}`;
    window.open(googleFormURL, "_blank");
  };

  const handleFileUpload = (event) => {
    setReceipt(event.target.files[0]);
  };

  return (
    <div className="container">
      <header>
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="cart-icon">
          <span>{cart.length}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>

      <div className="products">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} 
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 0 && (
        <div className="order-form">
          <h2>Enter Your Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
          />
          <button onClick={handleOrder}>Submit Order</button>
        </div>
      )}
    </div>
  );
}
