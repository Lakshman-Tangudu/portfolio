import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div>
          <p className="about-text">
            I'm a Computer Science engineering student at GITAM University with hands-on experience 
            in building full-stack web applications using React, Node.js, Express.js, and PostgreSQL. 
            I enjoy creating scalable backend systems, intuitive UI/UX, and solving real-world problems 
            through code.
          </p>
          <div className="about-highlights">
            <h3 className="about-highlights-title">Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-card">
                <h4>Problem-Solving</h4>
                <p>Strong analytical and logical thinking skills</p>
              </div>
              <div className="highlight-card">
                <h4>Communication</h4>
                <p>Clear and effective team collaboration</p>
              </div>
              <div className="highlight-card">
                <h4>Quick Learner</h4>
                <p>Rapid adaptation to new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
