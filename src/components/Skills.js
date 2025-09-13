import React from 'react';
import { motion } from 'framer-motion';
import { Database, Coffee, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Java Backend',
      icon: <Coffee size={24} />,
      skills: [
        { name: 'Java 17+', level: 95, color: '#f89820' },
        { name: 'Spring Framework', level: 90, color: '#6db33f' },
        { name: 'Spring Boot', level: 88, color: '#6db33f' },
        { name: 'Maven/Gradle', level: 85, color: '#02303a' },
        { name: 'REST APIs', level: 92, color: '#00ff41' },
        { name: 'Microservices', level: 80, color: '#00d4ff' }
      ]
    },
    {
      title: 'Minecraft Development',
      icon: <Gamepad2 size={24} />,
      skills: [
        { name: 'Bukkit/Spigot', level: 95, color: '#ff6b35' },
        { name: 'Paper API', level: 90, color: '#ff6b35' },
        { name: 'Plugin Development', level: 92, color: '#00ff41' },
        { name: 'Server Optimization', level: 85, color: '#00d4ff' },
        { name: 'NMS/Reflection', level: 80, color: '#ff6b35' },
        { name: 'BungeeCord', level: 75, color: '#00ff41' }
      ]
    },
    {
      title: 'Database & DevOps',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 90, color: '#00758f' },
        { name: 'PostgreSQL', level: 85, color: '#336791' },
        { name: 'Redis', level: 80, color: '#dc382d' },
        { name: 'Git', level: 88, color: '#f05032' },
        { name: 'Docker', level: 75, color: '#2496ed' },
        { name: 'Linux', level: 85, color: '#fcc624' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical arsenal for building amazing experiences</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="skill-category minecraft-block pixel-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
