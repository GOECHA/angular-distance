import PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import PlanetContainer from "../PlanetContainer/PlanetContainer";
import "./ReservationPage.css";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
// import {useHover} from "../../utilities/hooks/useHover"
import AppContext from "../AppContext";
// import { CircularProgress } from "@mui/material";
import ADLogo from "../assets/AD-img.png";
import sunHorizon from "../assets/realistic-luxury-space-travel-with-horizon.jpg";


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
  const savedReservationChoices = JSON.parse(localStorage.getItem("reservationChoices"));
  const [currentSelections, setCurrentSelections] = useState(savedReservationChoices || {
    id: "",
    date: "",
    planet: "",
    moon: "",
    gravity: "",
    
  },JSON.parse(localStorage.getItem("reservationChoices")) ?? []);

  const globals = useContext(AppContext);
  // console.log('respg 31', globals.allPlanets[243].gravity)

  //  console.log(34, globals.allPlanets)

  useEffect(() => {
    window.localStorage.setItem(
      "reservationChoices",
      JSON.stringify(currentSelections)
    );
  }, [currentSelections]);


  const handleClick = (event) => {
    const somePlanetInfo = allPlanets.find((planet) => {
     
      return planet.englishName === event.target.id;
    });
  
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
    // console.log(88, globals.allPlanets);

    const someMoonInfo = allPlanets.find((moon) => {
      console.log(90, currentSelections.moon);
      return moon.name === currentSelections?.moon;
    });
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

      const formatDate = () => {
      let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        // let month = currentSelections.date.slice(5, 6)
        let month = monthArr[parseInt(currentSelections.date.slice(5, 7)) - 1];
        let day = currentSelections.date.slice(-2)
        let year = currentSelections.date.slice(0,4)
        console.log({month}, month) 
       return  `${month}  ${day}, ${year}`
      }

      const displayedDate = () => {
        console.log('currentSelections.date',currentSelections.date)
        return !currentSelections.date ? '' : (
      <>
        <p className="departure-date-title">DEPARTURE DATE</p>
        {/* <h3 className="departure-date">{currentSelections.date}</h3> */}
        <h3 className="departure-date">{formatDate()}</h3>

      </>
      )
          }


      const reservationTitle = () => {
        return !currentSelections.planet.englishName ? (
          <>
          <img className="sun-horizon" src={sunHorizon} alt="sun horizon"></img>
          
          <p className="departure-date-title"> Choose Your Destination </p>
          </>
          )
           : (
      <>
        <h3 className="confirm-res-title">Confirm Reservation</h3>
      </>
      )
          }


          const displayDestinationTitle = () => {
            return !currentSelections.planet.englishName ? "" : (
          <>
           <p className="departure-date-title">DEPARTURE DESTINATION</p>
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
         {reservationTitle()}

          <div className="calendar-container">
            <div className="calendar-wrapper">
              <div className="calendar-input-wrapper">
                {displayedDate()}
              </div>
            </div>
          </div>

          <section className="destination-container">
          {displayDestinationTitle()}
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
