import React from 'react';
import { motion } from 'framer-motion';
import { Database, Coffee, Gamepad2, Server, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Java Backend',
      icon: <Coffee size={24} />,
      color: '#f89820',
      skills: [
        { name: 'Java 17+', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Maven/Gradle', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 80 },
        { name: 'JPA/Hibernate', level: 85 },
        { name: 'Spring Security', level: 82 }
      ]
    },
    {
      title: 'Desenvolvimento Minecraft',
      icon: <Gamepad2 size={24} />,
      color: '#ff6b35',
      skills: [
        { name: 'Bukkit/Spigot', level: 95 },
        { name: 'Paper API', level: 90 },
        { name: 'Desenvolvimento de Plugins', level: 92 },
        { name: 'Otimização de Servidor', level: 85 },
        { name: 'NMS/Reflection', level: 80 },
        { name: 'BungeeCord', level: 75 },
        { name: 'Plugin Architecture', level: 88 },
        { name: 'Server Management', level: 83 }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: <Database size={24} />,
      color: '#06b6d4',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Database Design', level: 88 },
        { name: 'Query Optimization', level: 85 },
        { name: 'Data Migration', level: 82 },
        { name: 'Indexing', level: 78 },
        { name: 'Backup & Recovery', level: 80 }
      ]
    },
    {
      title: 'DevOps & Ferramentas',
      icon: <Server size={24} />,
      color: '#10b981',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 70 },
        { name: 'AWS/Cloud', level: 65 },
        { name: 'Monitoring', level: 72 },
        { name: 'Logging', level: 78 },
        { name: 'Performance Tuning', level: 80 }
      ]
    },
    {
      title: 'Desenvolvimento Web',
      icon: <Code size={24} />,
      color: '#8b5cf6',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JSON/XML', level: 88 },
        { name: 'HTTP/HTTPS', level: 85 },
        { name: 'Web Security', level: 78 }
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
          <p>Meu arsenal técnico completo para desenvolvimento backend e sistemas</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="skill-category card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              style={{ borderTop: `4px solid ${category.color}` }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ background: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        style={{ background: category.color }}
                      />
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
