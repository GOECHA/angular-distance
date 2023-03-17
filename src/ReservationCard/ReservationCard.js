import PropTypes from "prop-types";
import React, { useContext } from "react";
import "./ReservationCard.css";
import AppContext from "../AppContext";




const ReservationCard = ({ id, date, planet, moon, planetGravity, moonGravity, deletePost }) => {

  const globals = useContext(AppContext)
   console.log(10, globals.allPlanets[243])
   
   const earthGravity = globals.allPlanets[243].gravity


  

  return (
    <div className="reservation-card">
      <div className="res-card-border">
        <div className="reservation-exit-wrapper">
          <button
            className="delete-reservation"
            onClick={(event) => deletePost(event)}
            id={id}
          >
            {" "}
            Ⓧ{" "}
          </button>
        </div>
        <div className="res-date-wrapper">
          <p className="travel-date-label">Date:</p>
          <p className="reservation-date">{date}</p>
        </div>
        <div className="destination-wrapper">
          <p className="reservation-destination">Destination</p>
          <div className="p-m-title-container">
            <div className="p-m-title-wrapper">
              <p className="reservation-p-destination">Planet:</p>
            </div>
            <div className="p-m-name-wrapper">
              <p className="reserve-planet">{planet}</p>
            </div>
          </div>
          <div className="p-m-title-container">
            <div className="p-m-title-wrapper">
              <p className="reservation-m-destination">Moon:</p>
            </div>
            <div className="p-m-name-wrapper">
            <p className="reserve-moon">{moon}</p>
              
            </div>
          </div>
          {/* <div className="p-m-name-wrapper">
            <p className="reserve-planet">{planet}</p>
            <p className="reserve-moon">{moon}</p>
          </div> */}
      <div className="gravity-container">
        <div className="gravity-title-wrapper">
          <p className="gravity">Gravity Data</p>
          </div>
          <div className="planet-gravity-title">
            <p className="earth-title">Earth</p>
            <p className="destination-gravity-title 1">{planet}</p>
            <p className="destination-gravity-title 2">{moon}</p>
            <p className="earth-gravity-data">{earthGravity}</p> 
            <p className="planet-gravity-data">{planetGravity}</p>            
            <p className="moon-gravity-data">{moonGravity}</p>  
          </div>
          {/* <div className="planet-gravity-title">
            <p className="earth-gravity-data">{earthGravity}</p> 
            <p className="planet-gravity-data">{planetGravity}</p>            
            <p className="moon-gravity-data">{moonGravity}</p>            
          </div> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;

ReservationCard.propTypes = {
  date: PropTypes.string,
  deletePost: PropTypes.func,
  id: PropTypes.number,
  moon: PropTypes.string,
  planet: PropTypes.string,
};
