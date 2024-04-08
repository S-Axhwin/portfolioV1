import React from 'react'
import './../index.css'
import {Link} from 'react-router-dom'


function Navbar({ place }) {
  function toggleMenu(state) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
  }
  return (
    <>
    <nav id="desktop-nav">
      <div className="logo"><b>ASH</b></div>
      <div>
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo"> <b>ASH</b></div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={()=>toggleMenu("open")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links" onClick={() => toggleMenu("close")}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar