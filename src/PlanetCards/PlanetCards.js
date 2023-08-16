import React from 'react'
import SelectedReservationModal from '../SelectedReservationModal/SelectedReservationModal'
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
  
    <button className="select-planet-btn" onClick={(e) =>{handleClick(e)}}>Select Destination</button>
        <SelectedReservationModal planetName={planetName} backGroundImage={backGroundImage} moonOptions={moonOptions} />
    </div>
    </>
  )
}

export default PlanetCards