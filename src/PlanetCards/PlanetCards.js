import React from 'react'
import './PlanetCards.css'


const PlanetCards = ({planetName, handleClick}) => {

  
// console.log(6, {planetName})
  return (
  <>
  <div className="planetCard" key={planetName}>
    <div className="planetName">{planetName}</div>
    <div className="moonDataContainer">
    <div className="moonQtyContainer">QTY</div>
    </div>
    <button className="select-planet-btn" onClick={(e) =>{handleClick(e)}}>Select</button>
    </div>
    </>
  )
}

export default PlanetCards