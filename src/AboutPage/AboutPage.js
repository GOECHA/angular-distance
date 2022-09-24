import React from 'react'
import './AboutPage.css'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import Footer from '../Footer/Footer'


const AboutPage = () => {
  return (
    <div className="about-container">
     <div className="reservation-button-container">
           <ReservationButton input='Reserve'/>
       <h2 className="about-title">ABOUT</h2>
      </div>
      <section className="quote-about-container">
        <div className="quote-about-wrapper">
          <p className="about-quote-p1">Angular distance \theta is the angle between the two sightlines, or between two point objects as viewed from an observer. Angular distance appears in mathematics and all natural sciences.
 </p>
          <p className='about-quote-p2'>Making Space Travel accessible to all life forms in the Solar System. Where luxury space travel will make 100 years feel like a quick trip around the sun. </p>
        </div>
      </section> 
      <div className="landing-footer">
        <Footer />
      </div>
    
    </div>
  )
}

export default AboutPage