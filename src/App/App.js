// import React from 'react';
import React, { useRef, useState } from 'react';
import './App.css';
// import { Utilities } from '../Utilities';
// import PlanetContainer from '../PlanetContainer/PlanetContainer';
import ReservationPage from '../ReservationPage/ReservationPage';
import LandingPageOne from '../LandingPageOne/LandingPageOne';
import LandingPageTwo from '../LandingPageTwo/LandingPageTwo';
import AboutPage from '../AboutPage/AboutPage';
import ReservationDetails from '../ReservationDetails/ReservationDetails';

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




   // run our useEffect 
 
   return(
    <main className='app-container'>
       <>
    {/* <Swiper 
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
        <LandingPageOne />
      </SwiperSlide>
      <SwiperSlide>
        <LandingPageTwo/>
      </SwiperSlide>
      <SwiperSlide>
        <ReservationPage />
      </SwiperSlide>
      <SwiperSlide>
        <ReservationDetails />
      </SwiperSlide>
      <SwiperSlide>
        <AboutPage setGoToReservation={setGoToReservation}/>
      </SwiperSlide>
    </Swiper> */}
  </>
   <Switch>
      <Route exact path='/reservations' render={ () =><ReservationPage setGoToHome={setGoToHome}/>} />
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


