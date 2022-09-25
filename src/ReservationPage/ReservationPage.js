import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Header from '../Header/Header'
import './ReservationPage.css'
import "react-datepicker/dist/react-datepicker.css";



// import PlanetContainer from '../PlanetContainer/PlanetContainer'
// import  ImageData  from '../ImageData'
// import venus from "../assets/hd2-venus.png"
const ReservationPage = ({ findPlanet, displayPlanets }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
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
      <div className="reservation-header">
         <Header/>
      </div>
         <h2 className="choose-destination">Choose your Destination</h2>
      {/* <PlanetContainer/> */}
         <div >
          {/* <img src={venus}/> */}
         {displayPlanets}
            
         </div>
         <section className="calendar-container">
         <div className="calendar-wrapper">
         <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          // endDate={endDate}
          onChange={date => setStartDate(date)}
        />
        </div>
        {/* <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        /> */}
         </section>
      </div>
  )
}

export default ReservationPage


