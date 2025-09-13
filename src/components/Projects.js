import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Minecraft Economy Plugin',
      description: 'A comprehensive economy system for Minecraft servers with banking, shops, auctions, and player trading. Features MySQL integration, web dashboard, and REST API.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'Bukkit/Spigot', 'MySQL', 'Spring Boot', 'REST API'],
      liveUrl: 'https://github.com/diogobertoncini/minecraft-economy',
      githubUrl: 'https://github.com/diogobertoncini/minecraft-economy',
      featured: true
    },
    {
      id: 2,
      title: 'Server Management API',
      description: 'A robust backend API for managing Minecraft servers, player data, and server statistics. Built with Spring Boot and PostgreSQL.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Redis'],
      liveUrl: 'https://github.com/diogobertoncini/server-management-api',
      githubUrl: 'https://github.com/diogobertoncini/server-management-api',
      featured: true
    },
    {
      id: 3,
      title: 'Database Migration Tool',
      description: 'A Java application for migrating and synchronizing data between different database systems with support for MySQL, PostgreSQL, and SQLite.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'MySQL', 'PostgreSQL', 'SQLite', 'JDBC'],
      liveUrl: 'https://github.com/diogobertoncini/db-migration-tool',
      githubUrl: 'https://github.com/diogobertoncini/db-migration-tool',
      featured: false
    },
    {
      id: 4,
      title: 'Minecraft Anti-Cheat System',
      description: 'Advanced anti-cheat plugin with machine learning detection, player behavior analysis, and real-time monitoring capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'Bukkit/Spigot', 'Machine Learning', 'MySQL', 'NMS'],
      liveUrl: 'https://github.com/diogobertoncini/anti-cheat-system',
      githubUrl: 'https://github.com/diogobertoncini/anti-cheat-system',
      featured: false
    },
    {
      id: 5,
      title: 'Player Analytics Dashboard',
      description: 'A web-based analytics dashboard for Minecraft server administrators to track player behavior, server performance, and game statistics.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Chart.js'],
      liveUrl: 'https://github.com/diogobertoncini/player-analytics',
      githubUrl: 'https://github.com/diogobertoncini/player-analytics',
      featured: false
    },
    {
      id: 6,
      title: 'Custom Minecraft Launcher',
      description: 'A Java-based Minecraft launcher with mod management, server integration, and automatic updates. Features custom UI and plugin support.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'JavaFX', 'HTTP Client', 'JSON', 'File Management'],
      liveUrl: 'https://github.com/diogobertoncini/custom-launcher',
      githubUrl: 'https://github.com/diogobertoncini/custom-launcher',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-content">
          {/* Featured Projects */}
          <div className="featured-projects">
            <h3 className="projects-subtitle">Featured Projects</h3>
            <div className="projects-grid featured-grid">
              {featuredProjects.map((project) => (
                <div key={project.id} className="project-card featured-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={20} />
                        </a>
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
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <h3 className="projects-subtitle">Other Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={20} />
                        </a>
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
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
