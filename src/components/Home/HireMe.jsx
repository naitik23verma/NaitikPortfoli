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

  return (
    <>
      {/* Hire Me Button */}
      <button className="shiny-button" onClick={togglePanel}>
        <span className="shiny-text">HIRE ME!</span>
      </button>

      {/* Hire Me Modal Panel */}
      <div className={`hire-me-panel ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={togglePanel}>✕</button>

        <form
          className="hire-me-form"
          action="https://formspree.io/f/xkgrnawb"
          method="POST"
          onSubmit={() => setStatus("Form submitted successfully!")}
        >
          <div className="left-form">
            <h2>Hire Me</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Why do you want to hire me?"
              rows="2"
              required
            />
          </div>

          <div className="right-form">
            <button type="submit" className="submit-button">Submit</button>
            <a href="/resume.pdf" download className="resume-button">Download Resume</a>
            <a href="https://wa.me/917869385243" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
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
