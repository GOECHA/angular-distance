import PropTypes from "prop-types"
import React from 'react';
import './PlanetContainer.css';
import earth  from "../assets/hd2-earth.png"
import jupiter from "../assets/hd2-jupiter.png"
import mars  from "../assets/hd2-mars.png"
import mercury  from "../assets/hd2-mercury.png"
import neptune from "../assets/hd2-neptune.png"
import saturn from "../assets/hd2-saturn.png"
import uranus from "../assets/hd2-uranus.png"
import venus from "../assets/hd2-venus.png"

import PlanetCards from "../PlanetCards/PlanetCards";

const planetImgs = [earth, jupiter, mars, mercury, neptune, saturn, uranus, venus]




const PlanetContainer = ({allPlanets, handleClick} ) => {

const truePlanet = allPlanets.filter((tPlanet) => tPlanet.isPlanet);

const planetCards = truePlanet.map((planet, index) =>{
console.log('planet:' , planet)
// const planetMoons = planet.map((pMoons) => pMoons.moon)
// console.log('planetMoons', planetMoons)
  const planetImage = planetImgs.find((image) => {
 let imagePath = image
 const regex = /-(.*?)\./;
 const match = imagePath.match(regex);

if (match) {
  var extractedWord = match[1];
  var capitalizedWord = extractedWord.charAt(0).toUpperCase() + extractedWord.slice(1).toLowerCase();
} else {
  console.log("No match found.");
}



  return capitalizedWord === planet.englishName ? imagePath : console.log('noPlanet')
})

  return (
    <PlanetCards
      backGroundImage={planetImage}
      planetName={planet.englishName}
    // moonQty={planet.moons}
      id={planet.id}
      key={planet.id}
    />
  )
})


  return (
    <div className="planet-container" handleClick={handleClick}>
    {planetCards}
    </div>
  )
}


export default PlanetContainer

PlanetContainer.propTypes = {
  handleClick: PropTypes.func
}