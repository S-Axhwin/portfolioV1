import React from 'react'
import './Navbar.css'


function Navbar({ place }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary-subtle" style={{padding: 10}} >
  <div className="container-fluid bg-secondary-subtle">
    <a className="navbar-brand bg-secondary-subtle" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{flexGrow: 0}} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={`nav-link ${place=='Home'?'active':null}`} href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${place=='About'?'active':null}`} href="/about">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href='/contact'>Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar