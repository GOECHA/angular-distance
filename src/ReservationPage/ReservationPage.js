import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import Header from '../Header/Header'
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import './ReservationPage.css'
// import "react-datepicker/dist/react-datepicker.css";
// import dayjs from "dayjs";

// const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
// dayjs().format('ll')
// import PlanetContainer from '../PlanetContainer/PlanetContainer'
// import  ImageData  from '../ImageData'
// import venus from "../assets/hd2-venus.png"
const ReservationPage = ({ findPlanet, displayPlanets, id, planetMoons, calendar, date, setGoToHome }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [currentPlanet, setCurrentPlanet] = useState('')
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
// console.log(`planetSelections`, planetSelections)=




  return (
    <div className="reservation-container">
      <div className="reservation-header">
         <Header onClick={(e) =>{setGoToHome(e.target.id)}}/>
      </div>
         <h2 className="choose-destination">Choose your Destination</h2>
        <PlanetContainer setCurrentPlanet={setCurrentPlanet}/>
         <div >
          {/* <img src={venus}/> */}
         {/* {displayPlanets} */}
            
         </div>
         <section className="lower-container">
          
         <div className="lower-destination-container">
         <div className="calendar-container">
        
         <div className="calendar-wrapper">
         <input name='calendar' className='calendar' type='date' min='25/09/2022'/>
           <p className="reservation-logo">AD</p>
           <p className="calendar-title">DEPARTURE</p>
          
         
         {/* <DatePicker
         editableDateInputs={true}
         isClearable
         filterDate={d => {
           return new Date() > d;
         }}
         placeholderText="Departure Selection"
          selected={startDate}
          selectsStart="09/25/2022"
          startDate={startDate}
          // endDate={endDate}
          onChange={date => setStartDate(date)}
          min="09/25/2022"
        /> */}
       
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
        <div className="moon-selection-wrapper">
            <form>
              <select className="moon-selections" defaultValue="" id={id} name="moon-selections">
              <option value="" disabled >MOON</option>
                <option value="">{planetMoons}</option>
              </select>
             <button className="select-moon-btn">SELECT</button>
           </form>
          {/* <div className="destination-wrapper"> */}
           
          
          </div>
          <div className="current-selection"></div>
          {/* </div> */}
          <h3 className="destination-title"> DESTINATION</h3>
        </section>
        </div>
         </section>
      </div>
  )
}

export default ReservationPage


