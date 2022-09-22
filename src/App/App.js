import React from 'react';
import './App.css';
// import { Utilities } from '../Utilities';
import PlanetContainer from '../PlanetContainer/PlanetContainer';

const App = () => {
  // const [bookRoom, setBookRoom] = useState([]);
    // const [spaceData, setSpaceData] = useState([])
 
 const planetWrapper = () => {
  return (
    <div>
      <PlanetContainer/>
    </div>
  )
 }


   // run our useEffect 
 
   return(
    <main className='App'>
      {/* <h1>Angular Distance</h1> */}
      <PlanetContainer/>
      {/* <Utilities/> */}
    </main>
  )
}




export default App;


  // const fetchAPi = () => {
  //   fetchData()
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(err => {
  //     console.log(err)
  //   });
  // }
