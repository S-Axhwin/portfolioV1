import React from 'react'
import Navbar from './asset/Navbar'
import Skill from './asset/Skill'
import Herosection from './asset/Herosection'
import Exp from './asset/Exp'
import 'bootstrap/dist/css/bootstrap.css';
import Exp2 from './asset/Exp2'


const Home = () => {
  const skills =[
    {
      skill: 'React JS',
      exp: '1 year',
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
    <Herosection/>
    <Exp/>
    <Exp2></Exp2>
    </>

  )
}

export default Home