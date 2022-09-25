import React from 'react';
import "./ReservationCard.css";


const ReservationCard = () => {
  return (
    <div className="reservation-card">
        <div className="reservation-date-wrapper">
            <p className="reservation-date">reservation-date</p>
        </div>
        <div className="destination-wrapper">
            <p className="reservation-destination" >destination</p>
        </div>
    </div>
  )
}

export default ReservationCard