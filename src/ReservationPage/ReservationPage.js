import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Header from '../Header/Header'
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import './ReservationPage.css'
import "react-datepicker/dist/react-datepicker.css";



// import PlanetContainer from '../PlanetContainer/PlanetContainer'
// import  ImageData  from '../ImageData'
// import venus from "../assets/hd2-venus.png"
const ReservationPage = ({ findPlanet, displayPlanets, id, planetMoons }) => {
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
        <PlanetContainer/>
         <div >
          {/* <img src={venus}/> */}
         {displayPlanets}
            
         </div>
         <section className="lower-container">
          
         <div className="lower-destination-container">
         <div className="calendar-container">
         <div className="calendar-wrapper">
           <p className="calendar-title">DEPARTURE</p>
           <p className="reservation-logo">AD</p>
         <DatePicker
         isClearable
         filterDate={d => {
           return new Date() > d;
         }}
         placeholderText="Departure Selection"
          selected={startDate}
          selectsStart
          startDate={startDate}
          // endDate={endDate}
          onChange={date => setStartDate(date)}
        />
       
        {/* <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        /> */}
        </div>
        <div className="reservation-image-container">
        </div>
        </div>
        <section className="destination-container">
          <div className="destination-wrapper">
            <h3 className="destination-title"> DESTINATION</h3>
            <div className="current-selection"></div>
          </div>
          <div className="moon-selection-wrapper">
            <form>
              <select className="moon-selections" id={id} name="moon-selections">
              <option value="" disabled selected>MOON</option>
                <option value="">{planetMoons}</option>
              </select>
             <button className="select-moon-btn">SELECT</button>
           </form>
          </div>
        </section>
        </div>
         </section>
      </div>
  )
}

export default ReservationPage


