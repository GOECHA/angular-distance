import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import "./ReservationPage.css";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
// import {useHover} from "../../utilities/hooks/useHover"
import AppContext from "../AppContext";
// import { CircularProgress } from "@mui/material";
import ADLogo from "../assets/AD-img.png";

const ReservationPage = ({
  reserveFlight,
  id,
  setGoToHome,
  allPlanets,
  authenticate,
  loading,
  isLoading,
}) => {
  

  // const[currentGravity, setCurrentGravity] = useState("")
  const [currentMoons, setCurrentMoons] = useState([]);
  const [message, setMessage] = useState("Choose your Destination");
  // const [showReserveButton, setShowReserveButton] = useState(false);
  const [currentSelections, setCurrentSelections] = useState({
    id: "",
    date: "",
    planet: "",
    moon: "",
    gravity: "",
    
  });

  const globals = useContext(AppContext);
  // console.log('respg 31', globals.allPlanets[243].gravity)

  //  console.log(34, globals.allPlanets)

  const handleClick = (event) => {
    console.log({allPlanets})
    const somePlanetInfo = allPlanets.find((planet) => {
      // console.log("respg54", planet.englishName);
      // console.log("respg55", event.target.id);
      return planet.englishName === event.target.id;
    });
    console.log({somePlanetInfo})
    console.log('somePlanetInfo.moons', somePlanetInfo.moons)
    console.log('currentSelections.planet', currentSelections.planet)
    console.log('currentSelections.date', currentSelections.date)
    setCurrentMoons(somePlanetInfo.moons);
    setCurrentSelections({ ...currentSelections, planet: somePlanetInfo });



  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentSelections({ ...currentSelections, [name]: value });
    !currentSelections.planet &&
      currentSelections.date &&
      setMessage(`Please, finish choosing selections`);
  };


  const handleReset = (e) => {
    setCurrentSelections({
      date: ""
    });
  };

  const moonOptions =
    currentMoons !== null ? (
      currentMoons.map((moon) => {
        return (
          <option
            key={moon.moon}
            value={moon.moon}
            onChange={(e) => console.log(`$$$$`, e.target.value)}
          >
            {moon.moon}
          </option>
        );
      })
    ) : (
      <option key="none" disabled value="">
        No Moons
      </option>
    );
console.log(76, {moonOptions})
  const handleReservation = (e) => {
    console.log(88, globals.allPlanets);

    const someMoonInfo = allPlanets.find((moon) => {
      console.log(90, currentSelections.moon);
      return moon.name === currentSelections?.moon;
    });
    console.log(92, someMoonInfo);
    currentSelections.planet &&
    currentSelections.date &&
    !currentSelections.moon
      ? reserveFlight({
          ...currentSelections,
          id: Date.now(),
          currentSelection: currentSelections.planet,
        })
      : currentSelections.planet && currentSelections.date
      ? reserveFlight({
          ...currentSelections,
          id: Date.now(),
          currentSelection: currentSelections.planet,
          moon: someMoonInfo,
        })
      : setMessage(`Please, finish choosing selections`);
  };

  const reservationButton = currentSelections.date &&
    currentSelections.planet && (
      <Link to={"/reservation-details"}>
        <button
          className="select-moon-btn"
          onClick={(e) => handleReservation(e)}
        >
          Reserve!
        </button>
      </Link>
    );
  console.log(93, currentSelections);


  const displayedPlanetTitle = () => {
return !currentSelections.planet.englishName ? '' : (
  <>
    <p className="p-res-title">Planet:</p>
    <p className="displayed-name-1">
      {currentSelections.planet.englishName}
    </p>
  </>
);
  }
  
  const displayedMoonTitle = () => {
    return !currentSelections.moon ? '' : (
  <>
    <p className="m-res-title">Moon:</p>
    <p className="displayed-name-2">{currentSelections.moon}</p>
  </>
  )
      }

  return (
    <div className="reservation-container">
      {loading && (
        <CircularIndeterminate
          authenticate={authenticate}
          isLoading={isLoading}
        />
      )}
      <div className="reservation-header">
        <Header className="res-header" />
        <div className="navigation-container">
          <Link className="reserve-to-home" to={"/"}>
            <button className="back-to-home-res-pg">Landing Page</button>
          </Link>

          <Link className="reserve-to-home" to={"/reservation-details"}>
            <button className="back-to-home-res-pg">Reservations</button>
          </Link>
        </div>
      </div>
      <div className="choose-dest-container">
        <h2 className="choose-destination">{message}</h2>
      </div>
      <section className="lower-container">
                <img className="AD-logo" src={ADLogo} alt="ADLogo"></img>
        <div className="lower-destination-container">
          <div className="calendar-container">
            <div className="calendar-wrapper">
              <div className="calendar-input-wrapper">
                <p className="departure-date-title">DEPARTURE DATE</p>
                <h3 className="departure-date">{currentSelections.date}</h3>
              </div>
            </div>
          </div>

          <section className="destination-container">
              <p className="departure-date-title">DEPARTURE DESTINATION</p>
           
            <div className="current-selection">
                {displayedPlanetTitle()}
                {displayedMoonTitle()} 
            </div>
            <div className="reservation-wrapper">
              <div className="moon-btn-wrapper">
                {reservationButton}
              </div>
            </div>
          </section>
        </div>
        <PlanetContainer
          className="planet-container"
          handleClick={handleClick}
          allPlanets={allPlanets}
          moonOptions={moonOptions}
          handleChange={handleChange}
          currentSelections={currentSelections}
          id={id}
          handleReset={handleReset} 
        />
      </section>
    </div>
  );
};

export default ReservationPage;

ReservationPage.propTypes = {
  allPlanets: PropTypes.array,
  id: PropTypes.number,
  reserveFlight: PropTypes.func,
  setGoToHome: PropTypes.func,
};
