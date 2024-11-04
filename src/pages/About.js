// src/pages/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I am a graduate student in Data Science with a background in software engineering,
        data analysis, and immersive technologies. My expertise includes data security, full-stack
        development, AR/VR projects, and machine learning research.
      </p>
      <div className="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>Python, R, SQL, Java</li>
          <li>Data Analysis, Machine Learning, NLP</li>
          <li>Data Visualization: Power BI, Tableau</li>
          <li>Big Data: Hadoop, Spark</li>
          <li>Web Development: React, Node.js</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
