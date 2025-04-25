import React from 'react';
import  SpotlightCard  from './SpotlightCard';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "./SocialLinks.css"

const socialLinks = [
  {
    icon: <FaLinkedin size={40} color="#0077b5" />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/naitik-verma869157318",
    bg: "linear-gradient(to right, #0077b5, #00c6ff)",
  },
  {
    icon: <FaGithub size={40} color="#333" />,
    title: "GitHub",
    url: "https://github.com/naitik23verma",
    bg: "linear-gradient(to right, #333333, #6e6e6e)",
  },
  {
    icon: <FaInstagram size={40} color="#e1306c" />,
    title: "Instagram",
    url: "https://www.instagram.com/naitikverma9111?igsh=MWppZWVxNGtpenJoNg==",
    bg: "linear-gradient(to right, #e1306c, #f77737)",
  },
];

const SocialLinks = () => {
  return (
    <div className="social-cards-container">
      {socialLinks.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <SpotlightCard
            style={{
              background: item.bg,
              color: "#fff",
              padding: "2rem",
              borderRadius: "1.5rem",
              width: "250px",
              textAlign: "center",
              margin: "1rem",
            }}
          >
            {item.icon}
            <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
          </SpotlightCard>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
