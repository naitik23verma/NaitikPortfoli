import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Naitik Verma</h3>
        <p className="footer-subtitle">Computer Science @ NIT Bhopal | Full Stack Developer</p>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Naitik Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
