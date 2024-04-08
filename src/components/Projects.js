import React from 'react'
import Navbar from './asset/Navbar'
import ProTemp from './asset/ProTemp';
import calImg from './asset/caImg.png'
import Exptracker from './asset/expTrack.png'
import Job from './asset/jobPro.png'

const Projects = () => {
  const projects = [
    {
      heading: "Calculator",
      img: calImg,
      gitlink: 'https://github.com',
      livelink: 'https://s-axhwin.github.io/Calculator-v2/'
    },
    {
      heading: "Expense Tracker",
      img: Exptracker,
      gitlink: 'https://github.com/S-Axhwin/project1_expTracker',
      livelink: 'https://s-axhwin.github.io/project1_expTracker/'
    },
    {
      heading: "Job Portal",
      img: Job,
      gitlink: 'https://github.com/S-Axhwin/job_portal',
      livelink: 'https://s-axhwin.github.io/job_portal/'
    },
  ];
  return (
    <>
    <Navbar/>
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