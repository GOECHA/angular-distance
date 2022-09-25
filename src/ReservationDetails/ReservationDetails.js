import React from 'react'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import "./ReservationDetails.css"

const ReservationDetails = () => {
  return (
    <div className="reservation-details-container">
        <div className="reservation-button-container">
           <ReservationButton input='Reserve'/>
           <h2 className="itineraries-title">Itineraries</h2>
         </div>
      {/* <section className="quote-reservation-container">
        {/* <div className="reservation-quote-wrapper">
          
        </div> */}
      {/* </section>    */}
   
        
    </div>
  )
}

export default ReservationDetails