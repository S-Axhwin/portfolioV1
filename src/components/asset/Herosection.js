import React from 'react'
import './Herosection.css'

const Herosection = () => {
  return (
    <>
  <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active"> <img src="http://bootstraplily.com/demo/detto-ui-kit/img/intro-one/slider-one.jpg" className="d-block w-100" id='img' alt="..." />  
      <div className="background-overlay"></div>
      <div className="carousel-caption">
        <h5 className="display-4 h4-md mb-4 font-weight-bold">Ashwin</h5>
        <p className="h4 mb-5 pb-3 text-white-200 larger">Machine Learning Experts</p>
        <button className='btn-cv' >Download CV</button>
    </div>
    </div>
  </div>
  </div>

 
    </>
  )
}

export default Herosection