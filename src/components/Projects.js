import React from 'react';
import { motion } from 'framer-motion';
import { Github, Gamepad2, Server, Database, Shield, BarChart3, Download } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'EcoCraft - Sistema de Economia',
      description: 'Plugin avançado de economia com sistema bancário, lojas, leilões e comércio entre jogadores. Inclui integração MySQL, dashboard web e API REST.',
      icon: <Gamepad2 size={32} />,
      technologies: ['Java', 'Bukkit/Spigot', 'MySQL', 'Spring Boot', 'REST API'],
      githubUrl: 'https://github.com/kBULOSU/EcoCraft',
      featured: true
    },
    {
      id: 2,
      title: 'ServerGuard - API de Gerenciamento',
      description: 'API backend abrangente para gerenciar servidores Minecraft, dados de jogadores e estatísticas. Construída com Spring Boot e PostgreSQL.',
      icon: <Server size={32} />,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Redis'],
      githubUrl: 'https://github.com/kBULOSU/ServerGuard',
      featured: true
    },
    {
      id: 3,
      title: 'DataSync - Ferramenta de Migração',
      description: 'Aplicação Java para migrar e sincronizar dados entre diferentes sistemas de banco de dados. Suporta MySQL, PostgreSQL e SQLite.',
      icon: <Database size={32} />,
      technologies: ['Java', 'MySQL', 'PostgreSQL', 'SQLite', 'JDBC'],
      githubUrl: 'https://github.com/kBULOSU/DataSync',
      featured: false
    },
    {
      id: 4,
      title: 'AntiCheat Pro',
      description: 'Plugin anti-cheat avançado com detecção por machine learning, análise de comportamento de jogadores e monitoramento em tempo real.',
      icon: <Shield size={32} />,
      technologies: ['Java', 'Bukkit/Spigot', 'Machine Learning', 'MySQL', 'NMS'],
      githubUrl: 'https://github.com/kBULOSU/AntiCheatPro',
      featured: false
    },
    {
      id: 5,
      title: 'Dashboard de Analytics',
      description: 'Dashboard web para administradores de servidores Minecraft. Acompanhe comportamento de jogadores, performance do servidor e estatísticas.',
      icon: <BarChart3 size={32} />,
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com/kBULOSU/AnalyticsDashboard',
      featured: false
    },
    {
      id: 6,
      title: 'MineLauncher',
      description: 'Launcher Minecraft baseado em Java com gerenciamento de mods, integração de servidor e atualizações automáticas. Interface customizada.',
      icon: <Download size={32} />,
      technologies: ['Java', 'JavaFX', 'HTTP Client', 'JSON', 'File Management'],
      githubUrl: 'https://github.com/kBULOSU/MineLauncher',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meus Projetos</h2>
          <p>Plugins Minecraft e sistemas backend que desenvolvi</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
