import React from 'react'
import './AboutPage.css'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const AboutPage = ({ setGoToReservation }) => {
  return (
    <div className="about-container">
     <div className="reservation-button-container">
      <Link to={"/reservations"}>
           <ReservationButton input='Reserve' text='Reserve' onClick={(() => {setGoToReservation(1)})}/>
      </Link>
       <h2 className="about-title">ABOUT</h2>
      </div>
      <section className="quote-about-container">
        <div className="quote-about-wrapper">
          <p className="about-quote-p1">
            <span className="starting-letter">A</span>ngular distance \theta is the angle between the two sightlines, or between two point objects as viewed from an observer. Angular distance appears in mathematics and all natural sciences.
          </p>
          <p className='about-quote-p2'>
          <span className="starting-letter">M</span>aking space travel accessible to all life forms in the Solar System. Where luxury space travel will make 100 years feel like a quick <br /> Earth trip around the sun. 
          </p>
        </div>
      </section> 
      <div className="landing-footer">
        <Footer />
      </div>
    
    </div>
  )
}

export default AboutPage