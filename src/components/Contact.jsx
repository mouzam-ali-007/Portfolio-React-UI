import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    // console.log('Form submitted:', formData)
    // alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a project in mind or want to collaborate? Let's talk!
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>mouzamsaleem007@gmail.com</p>
            <a href="mailto:mouzamsaleem007@gmail.com">Send a message</a>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <p>+92 (314) 5209757</p>
            <a href="tel:+12345678900">Call me</a>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Lahore, Pakistan</p>
            <a href="https://www.google.com/maps/place/Daftarkhwan+%7C+Boulevard/@31.5259161,74.3471409,17z/data=!3m1!4b1!4m6!3m5!1s0x391905ea31deb71f:0xf95ca5ecdadb3a04!8m2!3d31.5259116!4d74.3497158!16s%2Fg%2F11vp_fg7fl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank" rel="noopener noreferrer">View on map</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

