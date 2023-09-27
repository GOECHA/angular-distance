import PropTypes from "prop-types"
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
            planet={reservation.planet.englishName}
            moon= {reservation.moon.englishName}
            planetGravity={reservation.planet.gravity}
            moonGravity={reservation.moon.gravity}
            deletePost= {deletePost}
            key={reservation.id}
           
            />
})
:
<h3 className='error-res-mes'> Please make a reservation to view itineraries. . . </h3>


  return (
    <div className="reservation-details-container">
       <div className="itineraries-title-wrapper">
           <h2 className="itineraries-title">Itineraries</h2>
         </div>
        <div className="reservation-button-r-con-container">
          <Link className="det-res-btn" to={'/'}>
          <ReservationButton  text='Landing Page'/>
          </Link>
          <Link className="det-res-btn" to={"/reservations"}>
              <ReservationButton className="det-res-btn" text='Reserve' onClick={(() => {setGoToReservation(1)})}/>
           </Link>
           </div>
         <div className="details-wrapper">
         {handleError}
         </div>
    </div>
  )
}


export default ReservationDetails


ReservationDetails.propTypes = {
  deletePost: PropTypes.func,
  reservationDetails: PropTypes.array,
  setGoToReservation: PropTypes.func
}