import React from 'react';
import "./ReservationCard.css";


const ReservationCard = ({id, date, planet, moon, deletePost}) => {

  return (
    <div className="reservation-card">
        <div className="reservation-date-wrapper">
            <p className="reservation-date">{date}</p>
            <button className="delete-reservation" onClick ={((event)=> deletePost(event)  )}id={id}> Ⓧ </button>
        </div>
        <div className="destination-wrapper">
            <p className="reservation-destination" >Destination</p>
            <p className="reservation-p-destination" >Planet</p>
            <p className="reserve-planet">{planet}</p>
            <p className="reservation-m-destination" >Moon</p>
            <p className="reserve-moon">{moon}</p>          
        </div>
    </div>
  )
}
     

export default ReservationCard