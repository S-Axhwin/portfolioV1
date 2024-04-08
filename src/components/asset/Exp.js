import React from "react";
import pic from "./profilepic.jpeg";


const Exp = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            id="about"
            src={pic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h3>Experience</h3>
              <p>
                {" "}
                <b> (1 years )</b> <br />
                Frontend Development in
                <br />
                <li>React JS (1 year)</li>
                
              </p>
            </div>
            <div className="details-container">
              <h3>Education</h3>
              <p>
                B.Tech
                <br />
                AIML
              </p>
            </div>
          </div>
          <div className="text-container" style={{ textAlign: "center" }}>
            <p>
              Hi, I'm Ashwin! I'm a professional Frontend Developer. My passion
              for Programming started when I received my computer at 10 years
              old, and I haven't looked back since. 20 years later, I'm proud to
              say that I've done beautiful pages for clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
