import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'tangudulakshman123@gmail.com',
      link: 'mailto:tangudulakshman123@gmail.com'
    },
    {
      label: 'Phone',
      value: '9652941415',
      link: 'tel:9652941415'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/lakshmantangudu',
      link: 'https://linkedin.com/in/lakshmantangudu'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-list">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-item">
              <p className="contact-label">{item.label}</p>
              <a
                href={item.link}
                className="contact-link"
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
