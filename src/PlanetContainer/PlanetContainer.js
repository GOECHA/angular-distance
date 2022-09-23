import React from 'react';
import Planet from '../Planet/Planet';
import './PlanetContainer.css';


const PlanetContainer = ({spaceData, data, id}) => {
    // const [destinationText, setDestinationText] = useState([])
// console.log(`spaceData planetcontainer`, spaceData)
    // let info = data.map((data, index) => 
    // // console.log(`line 48`, data)
    //   <Planet key={index} id={data.id} />
    // )
    // console.log(`dataplantercontainer`, data)

    // I need to map over utilities spaceData and return the name of 

// const planetLinks = spaceData.map((planet) => {
//     return(
//         <Planet
//         key={planet.id}
//         id={planet.id}
//         name={planet.englishName}
//         moons={planet.moons}
//         />
//     )
// })


  return (
    
    <div className="planet-container">
        {/* {planetLinks}        */}
    </div>
  )
}

export default PlanetContainer