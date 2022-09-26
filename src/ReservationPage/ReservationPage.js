import React, { useState } from "react";
import Header from '../Header/Header'
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import './ReservationPage.css'
import {Link} from 'react-router-dom'

const ReservationPage = ({ reserveFlight, findPlanet, displayPlanets, id, planetMoons, calendar,  setGoToHome, allPlanets }) => {
  const [currentMoons, setCurrentMoons] = useState([])
  // const [currentPlanet, setCurrentPlanet] = useState('')
  // const [selectedMoon, setSelectedMoon] = useState('')
  // const [date, setDate] = useState('')
  const [message, setMessage] = useState('Choose your Destination')
  const [showReserveButton, setShowReserveButton] = useState(false)
  const [currentSelections, setCurrentSelections] = useState({ id:'', date:'', moon:'', planet:''})

  
  const handleClick = (event) => {
    setCurrentSelections({...currentSelections, planet: event.target.id})
     const somePlanetInfo = allPlanets.find(planet => {
    return planet.englishName === event.target.id      
     })
     setCurrentMoons(somePlanetInfo.moons)
     console.log( `######`, somePlanetInfo)
  }

  const handleChange = (event) => {
   const {name, value} = event.target
   setCurrentSelections({...currentSelections, [name]: value})
   currentSelections.date && currentSelections.moon && currentSelections.planet ? setShowReserveButton(true) :  setMessage(`Please, finish choosing selections`)
  }

const moonOptions = currentMoons !== null ?  currentMoons.map(moon => {
   return <option key={moon.moon} value={moon.moon}  onChange={((e)=> console.log(`$$$$`, e.target.value)  )}>{moon.moon}</option>
    }) 
    :  <option key='none' disabled value='' >No Moons</option>

    const handleReservation = (e) => {
      currentSelections.planet && currentSelections.moon && currentSelections.date ? 
        reserveFlight({...currentSelections, id: Date.now()})
       :
      //  null
       setMessage(`Please, finish choosing selections`)
      //  setMessage(`Please, finish selecting  ${!date && 'date,'} ${!selectedMoon && 'moon,'} ${!currentPlanet && ' planet'}`)
    }

  const reservationButton = showReserveButton &&   
    <Link to={'/reservation-details'}  >
      <button className="select-moon-btn" onClick={((e)=> handleReservation(e))}>Reserve!</button>
    </Link>
   
   
 

  return (
    <div className="reservation-container">
      <div className="reservation-header">
      <Link to={'/'}>
      <button className="back-to-home">Landing Page</button>
      </Link>
         <Header onClick={(e) =>{setGoToHome(e.target.id)}}/>
      </div>
         <h2 className="choose-destination">{message}</h2>
        <PlanetContainer  handleClick={handleClick}/>
         <div >
            
         </div>
         <section className="lower-container">
          
         <div className="lower-destination-container">
         <div className="calendar-container">
        
         <div className="calendar-wrapper">
         <input name='date' className='calendar' type='date' min='2145-09-25' value={currentSelections.date}  onChange={((e) => handleChange(e))}/>
           <p className="reservation-logo">AD</p>
           <p className="calendar-title">DEPARTURE</p>
        </div>
        <div className="reservation-image-container">
        </div>
        </div>
        <section className="destination-container">
        <div className="moon-selection-wrapper">
            <form>
              <select className="moon-selections" id={id} value={currentSelections.moon} name="moon" onChange={((e) => handleChange(e))}>
                <option value="" disabled >MOON</option>
                {moonOptions}
              </select>
                {reservationButton}
           </form>
         
           
          
          </div>
          <div className="current-selection">
            <div className="current-planet-selection">
              <p>Planet</p>
              <p className="displayed-name">{currentSelections.planet}</p>
            </div>
            <div className="current-moon-selection">
              <p>Moon</p>
              <p className="displayed-name">{currentSelections.moon}</p>
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


