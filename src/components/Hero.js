import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Server, Database } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV download link
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Update this path
    link.download = 'Diogo-Bertoncini-CV.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="greeting">>_</span> Hi, I'm <span className="highlight">Diogo</span>
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Code size={24} />
              <span>Java Backend Developer</span>
              <Server size={24} />
            </motion.div>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting robust server-side applications and Minecraft plugins. 
              Passionate about creating seamless gaming experiences through 
              clean code and innovative solutions.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Database size={20} />
                Download CV
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Connect
              </button>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="https://github.com/kBULOSU" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/diogo-bertoncini" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:diogo.bertoncini@example.com" className="social-link">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>DB</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
