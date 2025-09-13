import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Maven/Gradle', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Minecraft Development',
      skills: [
        { name: 'Bukkit/Spigot', level: 95 },
        { name: 'Paper API', level: 90 },
        { name: 'Plugin Development', level: 92 },
        { name: 'Server Optimization', level: 85 },
        { name: 'NMS/Reflection', level: 80 },
        { name: 'BungeeCord', level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
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
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
