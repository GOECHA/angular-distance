import React, {useState} from 'react'

import './PlanetCards.css'


const PlanetCards = ({backGroundImage, planetName, handleClick, moonOptions}) => {

  
console.log(6, {moonOptions})
  return (
  <>
  <div className="planetCard" key={planetName}>
    <div className="planet-img-wrapper">
     <img className="cardBackground" src={backGroundImage} alt={planetName} />
    </div>
    <div className="planetName">{planetName}</div>
    <div className="moonDataContainer">
    <div className="moonQtyContainer">Moon QTY {moonOptions}</div>
    </div>
    <button className="select-planet-btn" onClick={(e) =>{handleClick(e)}}>Select</button>
    </div>
    </>
  )
}

export default PlanetCards