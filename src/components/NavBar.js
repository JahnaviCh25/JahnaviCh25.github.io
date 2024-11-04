// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Jahnavi's Portfolio</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
