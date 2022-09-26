import React from 'react';
import './PlanetContainer.css';
import earth  from "../assets/hd2--earth.png"
import jupiter from "../assets/hd2-jupiter.png"
import mars  from "../assets/hd2-mars.png"
import mercury  from "../assets/hd2-mercury.png"
import neptune from "../assets/hd2-neptune.png"
import saturn from "../assets/hd2-saturn.png"
import uranus from "../assets/hd2-uranus.png"
import venus from "../assets/hd2-venus.png"



const PlanetContainer = ({spaceData, data, id, setCurrentPlanet, handleClick} ) => {


  return (
    
    <div className="planet-container">
      <div className="planet-wrapper">
     <section className ="grid grid-1">
      <button  className='planet-button mercury-btn'>
        <img className='planet-image mercury' id='Mercury' src={mercury} alt="mercury" onClick={(e) =>{handleClick(e)}}/>
      </button>
     </section>
     <section className ="grid grid-2">
      <button  className='planet-button venus-btn'>
        <img className='planet-image venus' id='Venus' src={venus} alt="venus" onClick={(e) =>{handleClick(e)}}/>
      </button>
     </section>
     <section className ="grid grid-3">
      <button className='planet-button earth-btn'>
        <img className='planet-image earth' id='Earth' src={earth} alt="earth" onClick={(e) =>{handleClick(e)}}/>    
         </button>
     </section>
     <section className ="grid grid-4">
       <button className='planet-button mars-btn'>
        <img className='planet-image mars' id='Mars' src={mars} alt="mars" onClick={(e) =>{handleClick(e)}}/>    
         </button>
     </section>
     <section className ="grid grid-5"> 
       <button className='planet-button jupiter-bt'>
        <img className='planet-image jupiter' id='Jupiter' src={jupiter} alt="jupiter" onClick={(e) =>{handleClick(e)}}/>
      </button>
     </section>
     <section className ="grid grid-6">
      <button className='planet-button saturn-btn'>
       <img className='planet-image saturn' id='Saturn' src={saturn} alt="saturn" onClick={(e) =>{handleClick(e)}}/>   
          </button>
     </section>
     <section className ="grid grid-7">
      <button className='planet-button neptune-btn'>
        <img className='planet-image neptune' id='Neptune' src={neptune} alt="neptune" onClick={(e) =>{handleClick(e)}}/>
      </button>
     </section>
     <section className ="grid grid-8">
      <button className='planet-button uranus-btn'>
        <img className='planet-image uranus' id='Uranus' src={uranus} alt="uranus" onClick={(e) =>{handleClick(e)}}/>    
          </button>
     </section>  
     </div> 
    </div>
  )
}

export default PlanetContainer