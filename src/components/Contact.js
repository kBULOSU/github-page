import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Vamos Conversar</h2>
          <p>
            Estou sempre interessado em novas oportunidades em desenvolvimento Java backend, 
            criação de plugins Minecraft e projetos de banco de dados. Seja para discutir 
            otimização de servidor, ajuda com plugins ou arquitetura backend, entre em contato!
          </p>
          
          <div className="contact-actions">
            <a href="mailto:diogo.bertoncini@example.com" className="btn btn-primary">
              <Mail size={20} />
              Enviar Email
            </a>
            <a href="https://github.com/kBULOSU" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={20} />
              Ver GitHub
            </a>
            <a href="https://linkedin.com/in/diogo-bertoncini" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
