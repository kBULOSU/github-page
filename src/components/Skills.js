import React from 'react';
import { motion } from 'framer-motion';
import { Database, Coffee, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Java Backend',
      icon: <Coffee size={24} />,
      skills: [
        { name: 'Java 17+', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Maven/Gradle', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Desenvolvimento Minecraft',
      icon: <Gamepad2 size={24} />,
      skills: [
        { name: 'Bukkit/Spigot', level: 95 },
        { name: 'Paper API', level: 90 },
        { name: 'Desenvolvimento de Plugins', level: 92 },
        { name: 'Otimização de Servidor', level: 85 },
        { name: 'NMS/Reflection', level: 80 },
        { name: 'BungeeCord', level: 75 }
      ]
    },
    {
      title: 'Banco de Dados & DevOps',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 85 }
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
          <h2>Habilidades & Tecnologias</h2>
          <p>Meu arsenal técnico para construir experiências incríveis</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="skill-category card"
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
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}%</div>
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
