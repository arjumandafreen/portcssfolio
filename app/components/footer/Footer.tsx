"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <a href="mailto:abc@gmail.com" className="social-icon email">
          <FaEnvelope />
        </a>
      </div>
      
      {/* Rights Reserved */}
      <p className="footer-rights">
        &copy; {new Date().getFullYear()} Arjumand Afreen | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
