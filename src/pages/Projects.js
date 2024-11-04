// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  { title: "YouTube Sentiment Analysis", description: "NLP techniques to analyze comments." },
  { title: "Microsoft Outage Vizboard", description: "Data visualization of outages." },
  { title: "Cybersecurity Blog", description: "Exploring AI tools for cybersecurity." },
  { title: "Virtual Assistant", description: "A virtual assistant for my website." },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
