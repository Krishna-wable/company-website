import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/contact", formData);
      console.log("Form Submitted Successfully:", response.data);
      setSuccessMessage("Form submitted successfully!");

      setFormData({ name: "", email: "", mobile: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 3002);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Failed to submit form. Try again.");
    }
  };

 
  const handleReset = () => {
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  
  return (
    
    <div className="container">
      
      <div className="header">
        <div className="text">Let's Talk About Your idea</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input">
          <input type="email" name="email" placeholder="Eg. example@email.com" value={formData.email} onChange={handleChange} />
        </div>
        <div className="input">
          <input type="tel" name="mobile" placeholder="Eg. +91 8000000000" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="input">
          <textarea name="message" placeholder="Write Message" value={formData.message} onChange={handleChange}></textarea>
        </div>
      </div>

     
      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>Submit</button>
        <button className="submit" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Contact;
