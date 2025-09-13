import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-diogo-bertoncini.pdf';
    link.download = 'CV-Diogo-Bertoncini.pdf';
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou <span className="text-gradient">Diogo</span>
            </motion.h1>
            
            <motion.div 
              className="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedor Java Backend
            </motion.div>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Especialista em desenvolvimento de aplicações backend robustas e plugins para Minecraft. 
              Apaixonado por criar experiências de jogo perfeitas através de código limpo e soluções inovadoras.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download size={20} />
                Baixar CV
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Vamos Conversar
                <ArrowRight size={20} />
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
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <div className="avatar-content">
                DB
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
