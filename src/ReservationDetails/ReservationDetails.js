import React from 'react'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import ReservationCard from '../ReservationCard/ReservationCard'
import "./ReservationDetails.css"
import { Link } from 'react-router-dom'

const ReservationDetails = ({setGoToReservation, reservationDetails, deletePost}) => {
    const handleError = reservationDetails.length ? 
    reservationDetails.map((reservation) =>{
    return <ReservationCard 
            id={reservation.id}
            date= {reservation.date}
            planet={reservation.planet}
            moon= {reservation.moon}
            deletePost= {deletePost}
            />
})
:
<h3> Please make a reservation to view itineraries. . . </h3>


  return (
    <div className="reservation-details-container">
      <Link to={'/'}>
      <button className="back-to-home">Landing Page</button>
      </Link>
        <div className="reservation-button-container">
          <Link to={"/reservations"}>
              <ReservationButton input='Reserve' onClick={(() => {setGoToReservation(1)})}/>
           </Link>
           <h2 className="itineraries-title">Itineraries</h2>
         </div>
         {handleError}
    </div>
  )
}

export default ReservationDetails