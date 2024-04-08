import React from 'react'
import Navbar from './asset/Navbar'
import ProTemp from './asset/ProTemp';
import calImg from './asset/caImg.png'
import Exptracker from './asset/expTrack.png'
import Job from './asset/jobPro.png'
import jobport1 from "./asset/jobport1.png"
import prohel from './asset/prohealth.png'
import dash from "./asset/dash.png"
const Projects = () => {
  const projects = [
    {
      heading: "Job Portal",
      img: jobport1,
      gitlink: 'https://github.com/S-Axhwin/OffClient',
      livelink: 'https://s-axhwin.github.io/OffClient/'
    },
    {
      heading: "Pro Health",
      img: prohel,
      gitlink: 'https://github.com/S-Axhwin/Pro-Health',
      livelink: 'https://s-axhwin.github.io/Pro-Health/'
    },
    {
      heading: "dashboard",
      img: dash,
      gitlink: 'https://github.com/S-Axhwin/Pro-Health',
      livelink: 'https://s-axhwin.github.io/Pro-Health/'
    },
  ];
  return (
    <>
    <section id="projects" >
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">

       {projects.map(value=>{
         return <ProTemp name={value.heading} gitlink={value.gitlink} demolink={value.livelink} img={value.img}/>
         //{ name, gitlink, demolink}
        })
      }
      </div>
  
    </section>
    </>
  )
}

export default Projects