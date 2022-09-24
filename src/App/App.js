// import React, { useState } from 'react';
import './App.css';
// import { Utilities } from '../Utilities';
// import PlanetContainer from '../PlanetContainer/PlanetContainer';
import ReservationPage from '../ReservationPage/ReservationPage';
import LandingPageOne from '../LandingPageOne/LandingPageOne';
import LandingPageTwo from '../LandingPageTwo/LandingPageTwo';
import {
  BrowserRouter,
  Router,
  Switch, 
  Nav
} from "react-router-dom";



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
    {/* <Switch> */}
    {/* <Route exact path='/' render={ () => < LandingPageOne />} /> */}
      {/* <LandingPageTwo/> */}
      <ReservationPage/>
    {/* </Switch> */}
    </main>
  )
}




export default App;


