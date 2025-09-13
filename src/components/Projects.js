import React from 'react';
import { motion } from 'framer-motion';
import { Github, Gamepad2, Server, Database, Shield, BarChart3, Download } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'EcoCraft - Economy System',
      description: 'Advanced economy plugin with banking, shops, auctions, and player trading. Features MySQL integration, web dashboard, and REST API for server management.',
      icon: <Gamepad2 size={32} />,
      technologies: ['Java', 'Bukkit/Spigot', 'MySQL', 'Spring Boot', 'REST API'],
      githubUrl: 'https://github.com/kBULOSU/EcoCraft',
      featured: true,
      color: '#00ff41'
    },
    {
      id: 2,
      title: 'ServerGuard - Management API',
      description: 'Comprehensive backend API for managing Minecraft servers, player data, and server statistics. Built with Spring Boot and PostgreSQL for high performance.',
      icon: <Server size={32} />,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Redis'],
      githubUrl: 'https://github.com/kBULOSU/ServerGuard',
      featured: true,
      color: '#00d4ff'
    },
    {
      id: 3,
      title: 'DataSync - Migration Tool',
      description: 'Java application for migrating and synchronizing data between different database systems. Supports MySQL, PostgreSQL, and SQLite with zero downtime.',
      icon: <Database size={32} />,
      technologies: ['Java', 'MySQL', 'PostgreSQL', 'SQLite', 'JDBC'],
      githubUrl: 'https://github.com/kBULOSU/DataSync',
      featured: false,
      color: '#ff6b35'
    },
    {
      id: 4,
      title: 'AntiCheat Pro',
      description: 'Advanced anti-cheat plugin with machine learning detection, player behavior analysis, and real-time monitoring capabilities for fair gameplay.',
      icon: <Shield size={32} />,
      technologies: ['Java', 'Bukkit/Spigot', 'Machine Learning', 'MySQL', 'NMS'],
      githubUrl: 'https://github.com/kBULOSU/AntiCheatPro',
      featured: false,
      color: '#ff6b35'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Web-based analytics dashboard for Minecraft server administrators. Track player behavior, server performance, and game statistics in real-time.',
      icon: <BarChart3 size={32} />,
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com/kBULOSU/AnalyticsDashboard',
      featured: false,
      color: '#00d4ff'
    },
    {
      id: 6,
      title: 'MineLauncher',
      description: 'Java-based Minecraft launcher with mod management, server integration, and automatic updates. Features custom UI and plugin support.',
      icon: <Download size={32} />,
      technologies: ['Java', 'JavaFX', 'HTTP Client', 'JSON', 'File Management'],
      githubUrl: 'https://github.com/kBULOSU/MineLauncher',
      featured: false,
      color: '#00ff41'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Minecraft plugins and backend systems I've built</p>
        </motion.div>

        <div className="projects-content">
          {/* Featured Projects */}
          <motion.div 
            className="featured-projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="projects-subtitle">Featured Projects</h3>
            <div className="projects-grid featured-grid">
              {featuredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card featured-card minecraft-block pixel-border"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ borderColor: project.color }}
                >
                  <div className="project-header">
                    <div className="project-icon" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ color: project.color }}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag" style={{ borderColor: project.color }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div 
            className="other-projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="projects-subtitle">Other Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card minecraft-block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="project-header">
                    <div className="project-icon" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ color: project.color }}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag" style={{ borderColor: project.color }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
