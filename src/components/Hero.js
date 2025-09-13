import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download, ArrowRight, Diamond, Pickaxe } from 'lucide-react';

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
    <section id="home" className="hero minecraft-hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="minecraft-greeting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="minecraft-prompt">&gt;</span> Olá, eu sou
            </motion.div>
            
            <motion.h1 
              className="minecraft-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="minecraft-name">Diogo</span>
              <Diamond size={32} className="diamond-icon" />
            </motion.h1>
            
            <motion.div 
              className="minecraft-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Pickaxe size={24} className="pickaxe-icon" />
              <span>Desenvolvedor Java Backend</span>
              <Pickaxe size={24} className="pickaxe-icon" />
            </motion.div>
            
            <motion.p 
              className="minecraft-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Desenvolvendo aplicações robustas no lado do servidor e plugins inovadores para Minecraft.  
              Apaixonado por criar experiências de jogo fluidas através de código limpo e soluções precisas.  
              Pronto para construir a próxima geração de experiências em servidores!
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button className="btn btn-primary minecraft-btn" onClick={handleDownloadCV}>
                <Download size={20} />
                Baixar CV
              </button>
              <button className="btn btn-secondary minecraft-btn" onClick={scrollToContact}>
                Vamos Programar
                <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a href="https://github.com/kBULOSU" target="_blank" rel="noopener noreferrer" className="social-link minecraft-social">
                <Github size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="minecraft-avatar">
              <div className="minecraft-skin">
                <img 
                  src="https://mc-heads.net/avatar/naosei/200" 
                  alt="Minecraft Skin"
                  className="skin-image"
                />
              </div>
              <div className="minecraft-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
