import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Tangudu Maha Yoganandha Lakshman
        </h1>
        <h2 className="hero-subtitle">
          Full-Stack Developer | React.js • Node.js • PostgreSQL
        </h2>
        <p className="hero-description">
          I build fast, modern, and user-friendly web applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button-primary">
            View Projects
          </a>
          <a href="#contact" className="hero-button-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
