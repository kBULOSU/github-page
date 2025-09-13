import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '30+', label: 'Plugins Minecraft', icon: <Code size={20} /> },
    { number: '4+', label: 'Anos de Experiência', icon: <Server size={20} /> },
    { number: '15+', label: 'Projetos de Banco', icon: <Database size={20} /> },
    { number: '100%', label: 'Paixão', icon: <Zap size={20} /> }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Sobre Mim</h2>
            <p>
              Sou um desenvolvedor Java backend de 24 anos, apaixonado por criar aplicações server-side 
              robustas e plugins inovadores para Minecraft. Minha expertise abrange desde otimização de 
              bancos de dados até arquitetura de servidores, sempre focado em performance e escalabilidade.
            </p>
            <p>
              Quando não estou programando, você me encontrará explorando novas tecnologias, contribuindo 
              para projetos open-source, ou otimizando consultas de banco de dados para aquela melhoria 
              perfeita de milissegundos.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
