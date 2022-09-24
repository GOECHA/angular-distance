import React from 'react'
import './LandingPageOne.css'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import Header from '../Header/Header'

const LandingPageOne = () => {
  return (
    <div className="landing-page-one-container">
      <div className="landing-header">
        <Header />
      </div>
      <section className="quote-one-container">
        <div className="quote-one-wrapper">
          <p className="galactic-quote">Your galactic journey awaits. . . </p>
        </div>
      </section> 
      <div className="reservation-button-container">
           <ReservationButton input='Reserve'/>
      </div>
    </div>
  )
}

export default  LandingPageOne;