import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '30+', label: 'Minecraft Plugins', icon: <Code size={20} /> },
    { number: '4+', label: 'Years Experience', icon: <Server size={20} /> },
    { number: '15+', label: 'Database Projects', icon: <Database size={20} /> },
    { number: '100%', label: 'Passion', icon: <Zap size={20} /> }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Backend developer crafting digital experiences</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Building the future, one line of code at a time</h3>
            <p>
              I'm a 24-year-old Java backend developer passionate about creating robust server-side 
              applications and innovative Minecraft plugins. My expertise spans from database optimization 
              to server architecture, always focused on performance and scalability.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or optimizing database queries for that perfect millisecond improvement.
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
                className="stat-item"
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
