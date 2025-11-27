import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Software Testing',
      issuer: 'NPTEL',
      year: '2025'
    },
    {
      title: 'Web Development',
      issuer: 'Eduskills',
      year: '2025'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-year">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
