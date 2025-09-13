import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'diogo.bertoncini@example.com',
      link: 'mailto:diogo.bertoncini@example.com'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/diogobertoncini',
      link: 'https://github.com/diogobertoncini'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/diogo-bertoncini',
      link: 'https://linkedin.com/in/diogo-bertoncini'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Brazil',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next Java or Minecraft project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities in Java backend development, 
              Minecraft plugin creation, and database projects. Whether you have a question 
              about server optimization, need help with a plugin, or want to discuss 
              backend architecture, feel free to reach out!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-detail">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
