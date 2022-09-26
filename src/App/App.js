// import React from 'react';
import React, { useRef, useState, useEffect } from 'react';
import './App.css';
// import { Utilities } from '../Utilities';
// import PlanetContainer from '../PlanetContainer/PlanetContainer';
import ReservationPage from '../ReservationPage/ReservationPage';
import LandingPageOne from '../LandingPageOne/LandingPageOne';
import LandingPageTwo from '../LandingPageTwo/LandingPageTwo';
import AboutPage from '../AboutPage/AboutPage';
import ReservationDetails from '../ReservationDetails/ReservationDetails';
import axios from 'axios'

import {
  BrowserRouter,
  Route,
  Switch, 
  Nav
} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Mousewheel, Keyboard } from "swiper";

// Now you can use all slider methods like



const App = () => {
  const [allPlanets, setAllPlanets] = useState()
  const [goToReservation, setGoToReservation] = useState(0)
  const [gotToHome, setGoToHome] = useState(0)
  const nav = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    nav.current.focus();
  };
  // const [bookRoom, setBookRoom] = useState([]);
  // const [spaceData, setSpaceData] = useState([])
 
//  const planetWrapper = () => {
//   return (
//     <div>
//       <PlanetContainer/>
//     </div>
//   )
//  }
// const [spaceData, setSpaceData] = useState([])


  useEffect(() => {
    axios({
    method: 'get',
    url:'https://api.le-systeme-solaire.net/rest/bodies/',
    data: 'data',
    key: 'data.id'
  })
     .then(res =>{
      setAllPlanets(res.data.bodies)
      // console.log(`res`, res.data.bodies)
     })
     .catch(err => {
      console.log(err)
     })
    //  console.log(112234, allPlanets)
  }, [])

//   const displayData = () => {
//   //   console.log(`--------------------------------------------------`)
//  console.log(`spaceData1234`,spaceData)
//   let info = spaceData.map((data, index) => 
//     // console.log(`line 48`, data)
//       <p key={index}>{data.id}</p> //needs to be <Planet />
//     )
//     console.log(`info`, info)
//     return info
//   }

const reserveFlight = () => {
  
} 
 
   return(
    <main className='app-container'>
   <Switch>
      <Route exact path='/reservations' render={ () =><ReservationPage setGoToHome={setGoToHome} allPlanets={allPlanets}/>} />
      <Route exact path='/' render={ () =>
          <Swiper 
          navigation={{
            ref:{nav},
            onClick:{onButtonClick}
          }}
          modules={[Parallax, Navigation, Mousewheel, Keyboard]} 
          className="mySwiper"
          // loop={true}
          speed={800}
          parallax={true}
        >
          <SwiperSlide >
            <LandingPageOne setGoToReservation={setGoToReservation}/>
          </SwiperSlide>
          <SwiperSlide>
            <LandingPageTwo setGoToReservation={setGoToReservation}/>
          </SwiperSlide>
          {/* <SwiperSlide>
            <ReservationPage />
          </SwiperSlide> */}
          <SwiperSlide>
            <ReservationDetails setGoToReservation={setGoToReservation} />
          </SwiperSlide>
          <SwiperSlide>
            <AboutPage setGoToReservation={setGoToReservation}/>
          </SwiperSlide>
        </Swiper>
      } />
    </Switch>
      {/* <LandingPageTwo/> */}
      {/* <ReservationPage/> */}
  
    </main>
  )
}




export default App;


