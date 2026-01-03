import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with cart integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/public/assets/glamourHub.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/public/assets/taskManagement.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: '/public/assets/weather.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/public/assets/socialMedia.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, categories, and search functionality.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: '/public/assets/books.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Music Player',
      description: 'A sleek music player with playlist management, audio visualization, and cloud sync.',
      technologies: ['React', 'Web Audio API', 'Firebase'],
      image: '/public/assets/music.png',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        A collection of projects I've worked on, showcasing my skills and creativity
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

