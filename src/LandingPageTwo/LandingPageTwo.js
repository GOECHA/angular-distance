import React from 'react'
import './LandingPageTwo.css'
import ReservationButton from '../controls/ReservationButton/ReservationButton'
import Footer from '../Footer/Footer'

const LandingPageTwo = ({input}) => {
  return (
    <div className="landing-page-two-container">
        <div className="reservation-button-container">
           <ReservationButton input='Reserve'/>
         </div>
      <section className="quote-container">
        <div className="quote-wrapper">
          <p className='somewhere'>Somewhere...</p>
          <p className='something'>something</p>
          <p className='incredible'>incredible</p>
          <p className='waiting'>is waiting to be known</p>
        </div>
      </section>  
      <div className="landing-footer">
        <Footer />
      </div>
        
    </div>
  )
}

export default  LandingPageTwo;