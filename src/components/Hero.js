import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV download link
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Update this path
    link.download = 'Your-Name-CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Diogo Bertoncini</span>
            </h1>
            <h2 className="hero-subtitle">Java Backend Developer</h2>
            <p className="hero-description">
              I'm a passionate Java backend developer with expertise in Minecraft plugin development 
              and database management. I love building robust server-side applications and creating 
              amazing gaming experiences.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download size={20} />
                Download CV
              </button>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/diogobertoncini" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/diogo-bertoncini" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:diogo.bertoncini@example.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-avatar">
              {/* You can replace this with your actual photo */}
              <div className="avatar-placeholder">
                <span>Diogo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
