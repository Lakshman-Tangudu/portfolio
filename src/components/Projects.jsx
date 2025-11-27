import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Movie App',
      description: 'A responsive movie search app using React.js and TMDB API featuring real-time search, favorites management, error handling, and Jest test cases.',
      techStack: ['React.js', 'TMDB API', 'Jest', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'URL Shortener Web App',
      description: 'A production-ready URL shortener built with React, Node.js, Express.js, Neon PostgreSQL, and Clerk authentication. Features secure sessions, scalable API, and deployed on Render.',
      techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Clerk'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
