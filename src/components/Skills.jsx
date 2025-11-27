import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Java', 'Python', 'C', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'CSS', 'Node.js', 'Express.js']
    },
    {
      title: 'Database',
      skills: ['SQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
