import React from 'react'
import imgSrc from './checkmark.png'
import arrow from "./arrow.png"
import Navbar from './Navbar'
const Exp2 = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development🎨</h2>
            <div className="article-container">
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>aced</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Tailwind CSS</h3>
                  <p>aced</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>aced</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>3JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development⛁</h2>
            <div className="article-container">
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express API</h3>
                  <p>aced</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={imgSrc}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>aced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Exp2