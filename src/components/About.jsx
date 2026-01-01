import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Get to know more about my background, experience, and what drives me
      </p>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with a love for creating beautiful and functional
            web applications. With expertise in modern web technologies, I bring ideas
            to life through clean code and thoughtful design.
          </p>
          <p>
            My journey in development started with curiosity and has evolved into a
            career focused on building user-centered solutions. I enjoy working with
            cutting-edge technologies and continuously learning new skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>20+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

