import React, { useState } from 'react';
import './register.css'; // Import the CSS file


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: 'male',
    age: '',
    phoneNumber1: '',
    phoneNumber2: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? (checked ? value : prevData.gender) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl = 'YOUR_GOOGLE_FORM_URL'; // Replace with your Google Form URL

    const form = document.createElement('form');
    form.action = formUrl;
    form.method = 'POST';
    form.target = '_blank'; // Open in a new tab

    // Append form data as hidden input fields
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = `entry.${getGoogleFormEntryId(key)}`; // Get Google Form entry ID
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Reset the form
    setFormData({
      fullName: '',
      email: '',
      gender: 'male',
      age: '',
      phoneNumber1: '',
      phoneNumber2: '',
      paymentMethod: 'credit',
    });
  };

  // Function to get the Google Form entry ID based on field name
  const getGoogleFormEntryId = (fieldName) => {
    const entryIds = {
      fullName: 'YOUR_FULLNAME_ENTRY_ID', // Replace with your Google Form entry IDs
      email: 'YOUR_EMAIL_ENTRY_ID',
      gender: 'YOUR_GENDER_ENTRY_ID',
      age: 'YOUR_AGE_ENTRY_ID',
      phoneNumber1: 'YOUR_PHONE1_ENTRY_ID',
      phoneNumber2: 'YOUR_PHONE2_ENTRY_ID',
      paymentMethod: 'YOUR_PAYMENT_ENTRY_ID',
    };
    return entryIds[fieldName];
  };

  return (
    <div className="form-container">
      <h2>ይመዝገቡ</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">ሙሉ ስም</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">ኢሜል</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>ጾታ</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              ተባዕት
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              ሴት
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="age">ዕድሜ</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber1">ስልክ ቁጥር</label>
          <input
            type="tel"
            id="phoneNumber1"
            name="phoneNumber1"
            value={formData.phoneNumber1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber2">+ ተጨማሪ ስልክ ቁጥር</label>
          <input
            type="tel"
            id="phoneNumber2"
            name="phoneNumber2"
            value={formData.phoneNumber2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>የክፍያ ዘዴ</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={formData.paymentMethod === 'credit'}
                onChange={handleChange}
              />
              የብድር ካርድ
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="debit"
                checked={formData.paymentMethod === 'debit'}
                onChange={handleChange}
              />
              የዴቢት ካርድ
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="plc"
                checked={formData.paymentMethod === 'plc'}
                onChange={handleChange}
              />
              PLC ካርድ
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="mobile"
                checked={formData.paymentMethod === 'mobile'}
                onChange={handleChange}
              />
              ሞባይል ክፍያ
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;