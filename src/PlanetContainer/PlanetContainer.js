import React from 'react';
import Planet from '../Planet/Planet';
import './PlanetContainer.css';
import { Utilities } from '../Utilities'

const PlanetContainer = ({spaceData, data}) => {
// console.log(`spaceData planetcontainer`, spaceData)
    // let info = data.map((data, index) => 
    // // console.log(`line 48`, data)
    //   <Planet key={index} id={data.id} />
    // )
    // console.log(`dataplantercontainer`, data)



    // I need to map over utilities spaceData and return the name of 
  return (
    
    <div>
        {/* <Planet spaceData={spaceData}/> */}
       <Utilities spaceData={spaceData}/>
    </div>
  )
}

export default PlanetContainer