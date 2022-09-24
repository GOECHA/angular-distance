
import React from 'react'
import './ReservationPage.css'
import Header from '../Header/Header'
// import PlanetContainer from '../PlanetContainer/PlanetContainer'
import  ImageData  from '../ImageData'
// import venus from "../assets/hd2-venus.png"

const ReservationPage = ({ findPlanet, displayPlanets }) => {

// const planetSelections = () => {
// return displayPlanets.map((planet, index) => {
//   console.log(`planet`, planet)
//   return <ImageData 
//           key={index}
//           displayPlanets = {displayPlanets}
//          />
//  })
// }
// const planetImages = 
// console.log(`planetSelections`, planetSelections)

  return (
    <div className="reservation-container">
      <Header/>
      {/* <PlanetContainer/> */}
         <div >
          {/* <img src={venus}/> */}
          <ImageData onCLick={(()=>{findPlanet()})} ></ImageData>
            
         </div>
      </div>
  )
}

export default ReservationPage


