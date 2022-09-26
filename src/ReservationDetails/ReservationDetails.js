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
            planet={reservation.planet}
            moon= {reservation.moon}
            deletePost= {deletePost}
            />
})
:
<h3 className='error-res-mes'> Please make a reservation to view itineraries. . . </h3>


  return (
    <div className="reservation-details-container">
       <div className="itineraries-title-wrapper">
           <h2 className="itineraries-title">Itineraries</h2>
      
        <div className="reservation-button-r-con-container">
          <Link to={'/'}>
          <button className="back-to-home-r-p">Landing Page</button>
          </Link>
           </div>
          <div className="reservation-button-r-con-right-container">
          <Link to={"/reservations"}>
              <ReservationButton input='Reserve' onClick={(() => {setGoToReservation(1)})}/>
           </Link>
          
           </div>
         </div>
         {handleError}
    </div>
  )
}


export default ReservationDetails


ReservationDetails.propTypes = {
  deletePost: PropTypes.func,
  reservationDetails: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.number,
    planet: PropTypes.string,
    moon: PropTypes.string,
    deletePost: PropTypes.func,
  }),
  setGoToReservation: PropTypes.func
}