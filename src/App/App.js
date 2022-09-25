import React from 'react';
// import React, { useRef,useState } from 'react';
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
  Router,
  Switch, 
  Nav
} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Mousewheel, Keyboard } from "swiper";

// Now you can use all slider methods like



const App = () => {
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
    <Swiper 
      navigation={true} 
      modules={[Parallax, Navigation, Mousewheel, Keyboard]} 
      className="mySwiper"
      // loop={true}
      speed={800}
      parallax={true}
    >
      <SwiperSlide>
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
        <AboutPage/>
      </SwiperSlide>
    </Swiper>
  </>
    {/* <Switch> */}
    {/* <Route exact path='/' render={ () => < LandingPageOne />} /> */}
      {/* <LandingPageTwo/> */}
      {/* <ReservationPage/> */}
    {/* </Switch> */}
    </main>
  )
}




export default App;


