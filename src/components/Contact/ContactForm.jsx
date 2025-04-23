import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // email is optional for template but good to collect
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u0iumyo',
      'template_9elxzur',
      {
        name: formData.name,
        message: formData.message,
      },
      'nM3hRSR-q_RuRHAOA'
    )
    .then(
      () => {
        setStatusMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error(error);
        setStatusMessage('❌ Oops, something went wrong.');
      }
    );
  };

  return (
    <div className="form-container">
      <h2 className="contact-heading">Let’s Connect 💬</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message 🚀</button>
      </form>
      {statusMessage && <p className="status-text">{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
