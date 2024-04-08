import React from 'react'
import Navbar from './asset/Navbar'
import emailIcon from './asset/email.png';
import linkedInIcon from './asset/linkedin.png'
import './asset/contact.css'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section id="contact" style={{height: "100vh"}}>
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src={emailIcon}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p style={{padding: 0}}><a style={{textDecoration: "none", color:'black'}} href="mailto:spashwin.s.p3@gmail.com">spashwin.s.p3@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img
          src={linkedInIcon}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p style={{padding: 0}}><a style={{textDecoration: "none", color:'black'}} target='__blank' href="https://www.linkedin.com/in/ashwin-sathiya-moorthy-7ba93b26a/">LinkedIn</a></p>
      </div>
    </div>
  </section>
  </>
  )
}

export default Contact