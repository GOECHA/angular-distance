import PropTypes from "prop-types";
import React from "react";
import "./LandingPageTwo.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const LandingPageTwo = ({ setGoToReservation }) => {
  return (
    <div className="landing-page-two-container">
      <div className="reservation-button-container-landing-pg2">
        <Link className="l-2-res-nav" to={"/reservation-details"}>
          <button className="back-to-home-btn-res-pg-l2">Reservations</button>
        </Link>
        <Link className="l-2-res-nav" to={"/reservations"}>
        <button className="back-to-home-btn-res-pg-l2">Reserve</button>
        </Link>
      </div>
      <section className="quote-container">
        <div className="quote-wrapper">
          <p className="somewhere">Somewhere...</p>
          <p className="something">something</p>
          <p className="incredible">incredible</p>
          <p className="waiting">is waiting to be known</p>
        </div>
      </section>
      <div className="landing-footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageTwo;

// LandingPageTwo.propTypes = {
//   setGoToReservation: PropTypes.func
// }
