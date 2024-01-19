import React from 'react'
import './Skill.css'

const Skill = ({skill, exp, details}) => {
  return (
    <>
    <div className="col-sm-6">
    <div className="card m-4"  id='card'>
      <div className="card-body">
        <h5 className="card-title">{skill}</h5>
        <p className="card-text">({exp})</p>
        <p className="card-text">{details}</p>
        <a href=""  className='btn' id="btn">Go somewhere</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default Skill