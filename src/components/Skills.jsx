import React from 'react'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaJira } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiNestjs, SiExpress } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Nestjs', icon: <SiNestjs />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
        { name: 'Express', icon: <SiExpress />, level: 70 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Jira', icon: <FaJira />, level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I work with to bring ideas to life
      </p>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

