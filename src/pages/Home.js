// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-intro">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Jahnavi Chintakindi, a Data Scientist, Full Stack Developer, and AI Enthusiast.
        </p>
        <p>
          I specialize in creating solutions for real-time data problems, exploring data security,
          and building interactive applications.
        </p>
        <button onClick={() => window.location.href='/projects'}>
          Explore My Work
        </button>
      </div>
    </div>
  );
}

export default Home;
