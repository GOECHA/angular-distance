import PropTypes from "prop-types"
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

import PlanetCards from "../PlanetCards/PlanetCards";


const PlanetContainer = ({allPlanets, handleClick} ) => {
console.log(17, allPlanets)

const planetCards = allPlanets.map((planet, index) =>{
 
  return planet.isPlanet && (
    <PlanetCards
      title={planet.englishName}
      id={planet.id}
      key={planet.id}
    />
  )
})


  return (
    planetCards
  )
}


export default PlanetContainer

PlanetContainer.propTypes = {
  handleClick: PropTypes.func
}