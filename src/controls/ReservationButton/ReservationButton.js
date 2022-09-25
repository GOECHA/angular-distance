import React from 'react'
import './ReservationButton.css'
import { Link } from 'react-router-dom';
// import 

const ReservationButton = ({setGoToReservation}) => {
  return (
    <Link to="/reservations" >
       <button className="reservation-button" input='Reserve' onClick={(() => {setGoToReservation(1)})}>Reserve</button>
    </Link>
  )
}

export default  ReservationButton;