import React, { useContext } from 'react';
import './myModal.css';
import AppContext from "../AppContext";



const Modal = ({ id, date, planet, moon, planetGravity, moonGravity }) => {
  const globals = useContext(AppContext)






  return (
  <div>
      <div className="modal-container" >
          <div className="modal">
          <div className="reservation-exit-wrapper">
       
      </div>
      {/* <div className="modal-res-date-wrapper">
        <p className="modal-travel-date-label">Date:</p>
        <p className="modal-reservation-date">{date}</p>
      </div>
      <div className="modal-destination-wrapper">
        <p className="modal-reservation-destination">Destination</p>
        <div className="modal-p-m-title-container">
          <div className="modal-p-m-title-wrapper">
            <p className="modal-reservation-p-destination">Planet:</p>
          </div>
          <div className="modal-p-m-name-wrapper">
            <p className="modal-reserve-planet">{planet}</p>
          </div>
        </div>
        <div className="modal-p-m-title-container">
          <div className="modal-p-m-title-wrapper">
            <p className="modal-reservation-m-destination">Moon:</p>
          </div>
          <div className="modal-p-m-name-wrapper">
            <p className="modal-reserve-moon">{moon}</p>
          </div>
        </div>
        {/* <div className="p-m-name-wrapper">
          <p className="reserve-planet">{planet}</p>
          <p className="reserve-moon">{moon}</p>
        </div> 
    <div className="modal-gravity-container">
      <div className="modal-gravity-title-wrapper">
        <p className="modal-gravity">Gravity Data</p>
        </div>
        <div className="modal-planet-gravity-title">
          <p className="modal-earth-title">Earth</p>
          <p className="modal-destination-gravity-title 1">{planet}</p>
          <p className="modal-destination-gravity-title 2">{moon}</p>
          {/* <p className="earth-gravity-data">{earthGravity}</p>  
          <p className="modal-planet-gravity-data">{planetGravity}</p>            
          <p className="modal-moon-gravity-data">{moonGravity}</p>  
        </div>
        <div className="planet-gravity-title">
          <p className="earth-gravity-data">{earthGravity}</p> 
          <p className="planet-gravity-data">{planetGravity}</p>            
          <p className="moon-gravity-data">{moonGravity}</p>            
        </div> 
      </div>
      </div>*/}
          </div>  
      </div>
  </div>
)
}

export default Modal


// return (
//   <div>
//       <div className="modal-container" isOpen={isOpen}>
//           <div className="modal">
//           <div className="reservation-exit-wrapper">
//         <button
//           className="modal-exit"
//           onClick={(event) => closeModal(event)}
//           id={id}
//         >
//           {" "}
//           Ⓧ{" "}
//         </button>
//       </div>
//       <div className="modal-res-date-wrapper">
//         <p className="modal-travel-date-label">Date:</p>
//         <p className="modal-reservation-date">{date}</p>
//       </div>
//       <div className="modal-destination-wrapper">
//         <p className="modal-reservation-destination">Destination</p>
//         <div className="modal-p-m-title-container">
//           <div className="modal-p-m-title-wrapper">
//             <p className="modal-reservation-p-destination">Planet:</p>
//           </div>
//           <div className="modal-p-m-name-wrapper">
//             <p className="modal-reserve-planet">{planet}</p>
//           </div>
//         </div>
//         <div className="modal-p-m-title-container">
//           <div className="modal-p-m-title-wrapper">
//             <p className="modal-reservation-m-destination">Moon:</p>
//           </div>
//           <div className="modal-p-m-name-wrapper">
//             <p className="modal-reserve-moon">{moon}</p>
//           </div>
//         </div>
//         {/* <div className="p-m-name-wrapper">
//           <p className="reserve-planet">{planet}</p>
//           <p className="reserve-moon">{moon}</p>
//         </div> */}
//     <div className="modal-gravity-container">
//       <div className="modal-gravity-title-wrapper">
//         <p className="modal-gravity">Gravity Data</p>
//         </div>
//         <div className="modal-planet-gravity-title">
//           <p className="modal-earth-title">Earth</p>
//           <p className="modal-destination-gravity-title 1">{planet}</p>
//           <p className="modal-destination-gravity-title 2">{moon}</p>
//           {/* <p className="earth-gravity-data">{earthGravity}</p>  */}
//           <p className="modal-planet-gravity-data">{planetGravity}</p>            
//           <p className="modal-moon-gravity-data">{moonGravity}</p>  
//         </div>
//         {/* <div className="planet-gravity-title">
//           <p className="earth-gravity-data">{earthGravity}</p> 
//           <p className="planet-gravity-data">{planetGravity}</p>            
//           <p className="moon-gravity-data">{moonGravity}</p>            
//         </div> */}
//       </div>
//       </div>
//           </div>
//       </div>
//   </div>
// )
