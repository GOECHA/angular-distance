import React from 'react';
import "./ReservationCard.css";


const ReservationCard = ({id, date, planet, moon, deletePost}) => {

  return (
    <div className="reservation-card">
      <button className="delete-reservation" onClick ={((event)=> deletePost(event)  )}id={id}> Ⓧ </button>
        <div className="reservation-date-wrapper">
            <p className="reservation-date">{date}</p>
        </div>
        <div className="destination-wrapper">
            <p className="reservation-destination" >destination</p>
            <p className="reserve-planet">{planet}</p>
            <p className="reserve-moon">{moon}</p>          
        </div>
    </div>
  )
}

export default ReservationCard