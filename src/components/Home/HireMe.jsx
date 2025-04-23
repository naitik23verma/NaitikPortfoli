import React, { useState } from "react";
import './HireMe.css';

const HireMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setStatus("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const url = "https://script.google.com/macros/s/AKfycbyPKiru8JMsatoWXvJbHITD8IcXhDbWNoGpYUOlVWwAlBfQAjprv76kgGdvs3VwONS9/exec";
  
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await res.json();
      console.log("Result from script:", result);
  
      if (result.result === "success") {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Submission failed.");
    }
  };
  
  

  return (
    <>
      {/* Hire Me Button */}
      <button className="shiny-button" onClick={togglePanel}>
        <span className="shiny-text">HIRE ME!</span>
      </button>

      {/* Hire Me Modal Panel */}
      <div className={`hire-me-panel ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={togglePanel}>✕</button>

        <form className="hire-me-form" onSubmit={handleSubmit}>
          <div className="left-form">
            <h2>Hire Me</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Why do you want to hire me?" rows="2" required />
          </div>

          <div className="right-form">
            <button type="submit" className="submit-button">Submit</button>
            <a href="/resume.pdf" download className="resume-button">Download Resume</a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
              Chat on WhatsApp
            </a>
          </div>
        </form>

        {/* Display status message */}
        {status && <p style={{ marginTop: "10px", color: "#fff" }}>{status}</p>}
      </div>
    </>
  );
};

export default HireMe;
