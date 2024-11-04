// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Portfolio | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
