import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Java Expertise',
      description: 'Deep knowledge of Java ecosystem, Spring Framework, and enterprise development patterns.'
    },
    {
      icon: <Users size={32} />,
      title: 'Minecraft Development',
      description: 'Extensive experience in Bukkit/Spigot plugin development and server optimization.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Database Specialist',
      description: 'Expert in MySQL, PostgreSQL, and database design for high-performance applications.'
    },
    {
      icon: <Target size={32} />,
      title: 'Backend Focus',
      description: 'Passionate about building scalable server-side applications and API development.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a passionate Java backend developer with expertise in Minecraft and databases</h3>
            <p>
              At 24 years old, I'm a dedicated Java backend developer with extensive experience 
              in Minecraft plugin development and database management. I specialize in building 
              robust server-side applications, creating engaging gaming experiences, and optimizing 
              database performance for high-traffic applications.
            </p>
            <p>
              My passion lies in developing efficient backend systems, creating innovative Minecraft 
              plugins, and working with various database technologies. I'm always eager to tackle 
              complex challenges and contribute to exciting projects in the gaming and enterprise sectors.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Minecraft Plugins</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Database Projects</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
