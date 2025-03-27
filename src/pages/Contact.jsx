import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">አግኙን</h2>
      <p className="contact-description">
        ለማንኛውም ጥያቄ ወይም አስተያየት እባኮትን ያግኙን።
      </p>
      <form 
        className="contact-form" 
        action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" 
        method="POST"
        target="_blank"
      >
        <label>ሙሉ ስም</label>
        <input type="text" name="entry.YOUR_NAME_FIELD_ID" placeholder="ሙሉ ስምዎን ያስገቡ" required />
        
        <label>ኢሜል</label>
        <input type="email" name="entry.YOUR_EMAIL_FIELD_ID" placeholder="ኢሜልዎን ያስገቡ" required />
        
        <label>መልእክት</label>
        <textarea name="entry.YOUR_MESSAGE_FIELD_ID" placeholder="መልእክትዎን ይጻፉ" required></textarea>
        
        <label>ፋይል ይጨምሩ</label>
        <input type="file" name="entry.YOUR_FILE_FIELD_ID" />
        
        <button type="submit">ላክ</button>
      </form>
    </div>
  );
};

export default Contact;
