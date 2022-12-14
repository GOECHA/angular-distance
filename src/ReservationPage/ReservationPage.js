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

const ReservationPage = ({
  reserveFlight,
  id,
  setGoToHome,
  allPlanets,
  authenticate,
  loading,
  isLoading
}) => {
  // const[currentGravity, setCurrentGravity] = useState("")
  const [currentMoons, setCurrentMoons] = useState([]);
  const [message, setMessage] = useState("Choose your Destination");
  // const [showReserveButton, setShowReserveButton] = useState(false);
  const [currentSelections, setCurrentSelections] = useState({
    id: "",
    date: "",
    moon: "",
    planet: "",
    gravity: "",
  });

  const globals = useContext(AppContext)
  // console.log('respg 31', globals.allPlanets[243].gravity)

//  console.log(34, globals.allPlanets)

  // const [hoverRef, setIsHovering] = useHover();

 
  // const hovering = (event) => {
  //   const { name, value } = event.target;
  //   setIsHovering9({ ...hoverRef, planet: event.target.id});
  //   const somePlanetInfo = allPlanets.find((planet) => {
  //     return planet.englishName === event.target.id ? 
  //     (<div ref={hoverRef}>{isHovering ? 'Hovering' : 'Not hovering'}</div>) : null
  // })}
  
  // }
 

  // const findInfo = (entity) => {
  //   const findEntity = allPlanets.find((item) => {
  //     console.log(52, item);
  //     console.log(entity)
  //    return item.englishName === entity.englishName 
  //   })
  //   console.log(54, findEntity)
  //   return findEntity
  // }

  // console.log(58, findInfo());




  const handleClick = (event) => {
  
    const somePlanetInfo = allPlanets.find((planet) => {
      console.log('respg54', planet.englishName)
      console.log('respg55', event.target.id);
      return planet.englishName === event.target.id;
    });
    setCurrentMoons(somePlanetInfo.moons);
    setCurrentSelections({ ...currentSelections, planet: somePlanetInfo});
    console.log('respage 55', somePlanetInfo.gravity)

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentSelections({ ...currentSelections, [name]: value });
    !currentSelections.planet && currentSelections.date &&
      setMessage(`Please, finish choosing selections`);
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



  const handleReservation = (e) => {
    console.log(88, globals.allPlanets)
    const someMoonInfo = allPlanets.find((moon) => {
     console.log(90, currentSelections.moon)
      return moon.name === currentSelections?.moon
    })
    console.log(92, someMoonInfo)
    currentSelections.planet &&
    currentSelections.date
      ? reserveFlight({ ...currentSelections, id: Date.now(), currentSelection: currentSelections.planet, moon: someMoonInfo}) 
      : setMessage(`Please, finish choosing selections`)
  };

  const reservationButton = currentSelections.date && currentSelections.planet && (
    <Link to={"/reservation-details"}>
      <button className="select-moon-btn" onClick={(e) => handleReservation(e)}>
        Reserve!
      </button>
    </Link>
  );
console.log(93, currentSelections)

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
         
            <Link to={"/"} >
              <button
                className="back-to-home-res-pg"
                onClick={(e) => {
                  setGoToHome(e.target.id);
                }}
              >
                Landing Page
              </button>
            </Link>
         
        </div>
      <div className="choose-dest-container">
        <h2 className="choose-destination">{message}</h2>
      </div>
      <PlanetContainer handleClick={handleClick} />
      <section className="lower-container">
        <div className="lower-destination-container">
          <div className="calendar-container">
            <div className="calendar-wrapper">
              <div className="calendar-input-wrapper">
                <input
                  name="date"
                  className="calendar"
                  type="date"
                  min="2145-09-25"
                  value={currentSelections.date}
                  onChange={(e) => handleChange(e)}
                />
                <p className="earth-calendar">Earth Calendar</p>
              </div>
              <p className="reservation-logo">AD</p>
              <p className="calendar-title">DEPARTURE</p>
            </div>
            <div className="reservation-image-container"></div>
          </div>
          <section className="destination-container">
            <div className="moon-selection-wrapper" >
              <form>
                <select
                  className="moon-selections"
                  id={id}
                  value={currentSelections.moon}
                  name="moon"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" disabled>
                    MOON
                  </option>
                  {moonOptions}
                </select>
              </form>
            </div>
            <div className="current-selection">
              {/* <div className="current-planet-selection"> */}
                <p className="p-res-title">Planet</p>
                <p className="m-res-title">Moon</p>
                <p className="displayed-name-1">{currentSelections.planet.englishName}</p>
              {/* </div> */}
              {/* <div className="current-moon-selection"> */}
                <p className="displayed-name-2">{currentSelections.moon}</p> 
              {/* </div> */}
            </div>
            <div className="reservation-wrapper">
                 <div className="moon-btn-wrapper">
                   {reservationButton}
                 <h3 className="destination-title"> DESTINATION </h3>
                </div>
                </div>

            
          </section>
        </div>
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
