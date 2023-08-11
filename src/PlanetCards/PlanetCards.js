import React from 'react'

const PlanetCards = ({planet, handleClick}) => {

  

  return (
  <>
  <div className="planetCard" key={planet}>
    <div className="planetName">Planet Name</div>
    <div className="moonDataContainer">
    <div className="moonQtyContainer">QTY</div>
    <label for="multi-select">Multiple Select</label>
<div class="select select--multiple">
  <select id="multi-select" multiple>
  <option value="Option 1">Moons</option>
  </select>
  <span class="focus"></span>
</div>
    </div>
    <button className="select-planet-btn" onClick={(e) =>{handleClick(e)}}>Select</button>
    </div>
    </>
  )
}

export default PlanetCards