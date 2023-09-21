import React from "react";
import SelectedReservationModal from "../SelectedReservationModal/SelectedReservationModal";
import "./PlanetCards.css";

const PlanetCards = ({
  backGroundImage,
  planetName,
  handleClick,
  moonOptions,
  handleChange,
  currentSelections,
  id,
  handleReset,
}) => {
  console.log(6, { moonOptions });
  return (
    <>
      <div className="planetCard" key={planetName}>
        <div className="planetName">{planetName}</div>
        <div className="planet-img-wrapper">
          <img
            className="cardBackground"
            src={backGroundImage}
            alt={planetName}
          />
        </div>

        {/* <button className="select-planet-btn" onClick={(e) =>{handleClick(e)}}>Select Destination</button> */}
        <SelectedReservationModal
          planetName={planetName}
          backGroundImage={backGroundImage}
          moonOptions={moonOptions}
          handleChange={handleChange}
          handleClick={handleClick}
          currentSelections={currentSelections}
          id={id}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};

export default PlanetCards;
