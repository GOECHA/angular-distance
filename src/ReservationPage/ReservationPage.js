import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import Header from '../Header/Header'
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import './ReservationPage.css'


const ReservationPage = ({ findPlanet, displayPlanets, id, planetMoons, calendar,  setGoToHome, allPlanets }) => {
  const [currentPlanet, setCurrentPlanet] = useState('')
  const [currentMoons, setCurrentMoons] = useState([])
  const [selectedMoon, setSelectedMoon] = useState('')
  const [date, setDate] = useState('')

  const handleClick = (event) => {
     setCurrentPlanet(event.target.id)
     const somePlanetInfo = allPlanets.find(planet => {
    return planet.englishName === event.target.id      
     })
     setCurrentMoons(somePlanetInfo.moons)
     console.log( `######`, somePlanetInfo)
  }

const moonOptions = currentMoons !== null ?  currentMoons.map(moon => {
   return <option key={moon.moon} value={moon.moon}  onChange={((e)=> console.log(`$$$$`, e.target.value)  )}>{moon.moon}</option>
    }) 
    :  <option key='none' disabled value='' >No Moons</option>




  return (
    <div className="reservation-container">
      <div className="reservation-header">
         <Header onClick={(e) =>{setGoToHome(e.target.id)}}/>
      </div>
         <h2 className="choose-destination">Choose your Destination</h2>
        <PlanetContainer setCurrentPlanet={setCurrentPlanet} handleClick={handleClick}/>
         <div >
            
         </div>
         <section className="lower-container">
          
         <div className="lower-destination-container">
         <div className="calendar-container">
        
         <div className="calendar-wrapper">
         <input name='calendar' className='calendar' type='date' min='2145-09-25' value={date}  onChange={((event)=> setDate(event.target.value))}/>
           <p className="reservation-logo">AD</p>
           <p className="calendar-title">DEPARTURE</p>
    
        </div>
        <div className="reservation-image-container">
        </div>
        </div>
        <section className="destination-container">
        <div className="moon-selection-wrapper">
            <form>
              <select className="moon-selections" id={id} value={selectedMoon} name="moon-selections" onChange={((event) => setSelectedMoon(event.target.value))}>
              <option value="" disabled >MOON</option>
              {moonOptions}
              </select>
             <button className="select-moon-btn" onClick={(()=> console.log(`book-reservation`))}>Reserve!</button>
           </form>
         
           
          
          </div>
          <div className="current-selection">
            <div className="current-planet-selection">
              <p>Planet</p>
              <p className="displayed-name">{currentPlanet}</p>
            </div>
            <div className="current-moon-selection">
              <p>Moon</p>
              <p className="displayed-name">{selectedMoon}</p>
            </div>
          </div>
          {/* </div> */}
          <h3 className="destination-title"> DESTINATION</h3>
        </section>
        </div>
         </section>
      </div>
  )
}

export default ReservationPage


