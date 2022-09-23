import React from 'react';
import './App.css';
// import { Utilities } from '../Utilities';
import PlanetContainer from '../PlanetContainer/PlanetContainer';
import ReservationPage from '../ReservationPage/ReservationPage';
import LandingPageOne from '../LandingPageOne/LandingPageOne';
import LandingPageTwo from '../LandingPageTwo/LandingPageTwo';


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
      {/* <LandingPageOne />
      <LandingPageTwo/> */}
      <ReservationPage className="reservation-page" />
    </main>
  )
}




export default App;


