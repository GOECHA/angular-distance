import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './utilities';


const App = () => {
  // const [bookRoom, setBookRoom] = useState([]);
      
  const fetchAPi = () => {
    fetchData('/jupiter')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log(err)
    });
  }



 
   // run our useEffect 
 
   return(
    <main className='App'>
      <h1>Angular Distance</h1>
      
    </main>
  )

}
export default App;
