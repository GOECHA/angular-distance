import React from "react"
// import AppReducer from './AppReducer';


import earth  from "./assets/hd2--earth.png"
import jupiter from "./assets/hd2-jupiter.png"
import mars  from "./assets/hd2-mars.png"
import mercury  from "./assets/hd2-mercury.png"
import neptune from "./assets/hd2-neptune.png"
import saturn from "./assets/hd2-saturn.png"
import uranus from "./assets/hd2-uranus.png"
import venus from "./assets/hd2-venus.png"





const ImageData = () => {


    // const images = [
    //  "./src/assets/distant-planet.webp",
    //  "./src/assets/earth.jpg",
    //  "./src/assets/earth.png",
    //  "./src/assets/galactic-planet.png",
    //  "./src/assets/GTS_Stars-2.jpeg",
    //  "./src/assets/horizon.jpg",
    //  "./src/assets/interior-view.jpg",
    //  "./src/assets/jupiter.png",
    //  "./src/assets/mars.png",
    //  "./src/assets/mercury.png",
    //  "./src/assets/neptune.png",
    //  "./src/assets/planet-alignment.png",
    //  "./src/assets/Planets_0001s_0000_Pluto.png",
    //  "./src/assets/planets-row.png",
    //  "./src/assets/pod-horizon.jpg",
    //  "./src/assets/pod.jpg",
    //  "./src/assets/saturn.png",
    //  "./src/assets/space-horizon.jpg",
    //  "./src/assets/sun-horizon.jpg",
    //  "./src/assets/uranus.png",
    //  "./src/assets/venus.png",
    //  "./src/assets/water-planet.webp",
    //  "./src/assets/weather-balloon.jpg"
    //  ]
     
     
     const planetImageData = [
        earth,
        jupiter,
        mars ,
        mercury,
        neptune,
        saturn ,
        uranus ,
        venus ,

     ]


const findPlanet = (planet) => {
  const planetImages = planetImageData.find(planetImage => planetImage.includes(planet))
  console.log(11111, planetImages)
}
console.log(`find-planet`, findPlanet('earth'))



const displayPlanets = () => {
  const planetImages = planetImageData.map(planetImage => {
    console.log(`planetImage`,`"${planetImage}"`)
  return <img className="planet-image" src={planetImage} alt="planetImage"/>
  })
  console.log(planetImages)
  return planetImages
}
console.log(`find-planet1111`, displayPlanets())

  return (
    <div>
      {displayPlanets()}
    </div>
  )
}

export default ImageData;

    //      "../../assets/hd2--earth.png",
    //      "../../assets/hd2-jupiter.png",
    //      "../../assets/hd2-mars.png",
    //      "../../assets/hd2-mercury.png",
    //      "../../assets/hd2-neptune.png",
    //      "../../assets/hd2-saturn.png",
    //      "../../assets/hd2-uranus.png",
    //      "../../assets/hd2-venus.png"