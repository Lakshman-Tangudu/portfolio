import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech CSE',
      institution: 'GITAM University',
      period: '2022 – Present'
    },
    {
      degree: 'Grade 12',
      institution: 'Sri Chaitanya Junior College',
      period: 'Completed'
    },
    {
      degree: 'Grade 10',
      institution: 'Sri Chaitanya Techno School',
      period: 'Completed'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-list">
          {education.map((item, index) => (
            <div key={index} className="education-item">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-period">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
