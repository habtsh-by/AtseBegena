import React, { useState } from 'react';
import './contact.css'; // Create this CSS file
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const GOOGLE_FORM_ACTION = "YOUR_GOOGLE_FORM_URL"; // Replace with your Google Form URL
  const ENTRY_FIRST_NAME = "entry.YOUR_FIRST_NAME_ID"; // Replace with your entry IDs
  const ENTRY_LAST_NAME = "entry.YOUR_LAST_NAME_ID";
  const ENTRY_EMAIL = "entry.YOUR_EMAIL_ID";
  const ENTRY_PHONE = "entry.YOUR_PHONE_ID";
  const ENTRY_MESSAGE = "entry.YOUR_MESSAGE_ID";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <div className="contact-details">
          <div className="contact-detail">
          <FaPhoneAlt />
            <span>+1 012 3456 789</span>
          </div>
          <div className="contact-detail">
          <FaEnvelope />
            <span>demo@gmail.com</span>
          </div>
          <div className="contact-detail">
          <FaMapMarkerAlt /> 
            <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
          </div>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
          <FaTwitter />
        </div>
      </div>
      <div className="form-wrapper">
        <form action={GOOGLE_FORM_ACTION} method="POST" target="_blank">
          <div className="form-row">
            <input type="text" name={ENTRY_FIRST_NAME} placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input type="text" name={ENTRY_LAST_NAME} placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="email" name={ENTRY_EMAIL} placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="tel" name={ENTRY_PHONE} placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>
          <textarea name={ENTRY_MESSAGE} placeholder="Write your message..." value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;