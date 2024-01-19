import React from 'react'
import Navbar from './asset/Navbar'
import Skill from './asset/Skill'
import Herosection from './asset/Herosection'
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  const skills =[
    {
      skill: 'React JS',
      exp: '6 months',
      details: 'Worked in Advanced Project for 5 months',
    },
    {
      skill: 'Python',
      exp: '3 years'
    },
    {
      skill: 'HTML CSS',
      exp: '3 years'
    },
    {
      skill: 'MicroSoft Excel',
      exp: '3 years'
    },
  ]
  return (
    <>
    <Navbar place={'Home'} />
    <Herosection/>
    <div className="row" style={{margin: "20px"}}>
    {skills.map((value, index)=>{
      return <Skill key={index} exp={value.exp} skill={value.skill} details={value.details}/>
    })}
    </div>
    </>
  )
}

export default Home