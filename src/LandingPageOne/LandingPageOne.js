import PropTypes from "prop-types"
import React from 'react'
import './LandingPageOne.css'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


const LandingPageOne = ({setGoToReservation}) => {
  return (
    <div className="landing-page-one-container">
      <div className="landing-one-header">
        <Header />
      </div>
      <section className="quote-one-container">
        <div className="quote-one-wrapper">
          <p className="galactic-quote">Your galactic journey awaits. . . </p>
        </div>
      </section> 
      <div className="reservation-p1-button-container">
         <Link to={"/reservations"}>
           {/* <ReservationButton className="reservation-button" input='Reserve' onClick={(() => {setGoToReservation(1)})}/> */}
            <ReservationButton className="reservation-button" input='Reserve' />
         </Link>
      </div>
    </div>
  )
}


export default  LandingPageOne;

LandingPageOne.propTypes = {
  setGoToReservation: PropTypes.func
}