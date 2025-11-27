import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './components/Footer.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>© 2025 Tangudu Maha Yoganandha Lakshman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
