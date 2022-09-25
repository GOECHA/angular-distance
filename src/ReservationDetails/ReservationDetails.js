import React from 'react'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import ReservationCard from '../ReservationCard/ReservationCard'
import "./ReservationDetails.css"
import { Link } from 'react-router-dom'

const ReservationDetails = ({setGoToReservation}) => {
  return (
    <div className="reservation-details-container">
        <div className="reservation-button-container">
          <Link to={"/reservations"}>
              <ReservationButton input='Reserve' onClick={(() => {setGoToReservation(1)})}/>
           </Link>
           <h2 className="itineraries-title">Itineraries</h2>
         </div>
      {/* <section className="quote-reservation-container">
        {/* <div className="reservation-quote-wrapper">
          
        </div> */}
      {/* </section>    */}
   <ReservationCard />
        
    </div>
  )
}

export default ReservationDetails