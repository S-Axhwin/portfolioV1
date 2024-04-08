import React from 'react'
import profile from './pro.png'
import resu from './resume.pdf'

const Herosection = () => {
  function openRes(){
    window.open(resu)
  }
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profile} alt="Ashwin" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ashwin</h1>
        <p className="section__text__p2">
          Frontend Developer <br/>
          & <br/> ML expert
        </p>
        <div className="btn-container">
          <button
            className="btn btn-primary"
            onClick={openRes}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default Herosection