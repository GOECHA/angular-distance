import React from 'react';
// import Planet from '../Planet/Planet';
import './PlanetContainer.css';
import earth  from "../assets/hd2--earth.png"
import jupiter from "../assets/hd2-jupiter.png"
import mars  from "../assets/hd2-mars.png"
import mercury  from "../assets/hd2-mercury.png"
import neptune from "../assets/hd2-neptune.png"
import saturn from "../assets/hd2-saturn.png"
import uranus from "../assets/hd2-uranus.png"
import venus from "../assets/hd2-venus.png"



const PlanetContainer = ({spaceData, data, id}) => {
//   const planetImageData = [
//     earth,
//     jupiter,
//     mars ,
//     mercury,
//     neptune,
//     saturn ,
//     uranus ,
//     venus ,

//  ]

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
      <div className="planet-wrapper">
     <section className ="grid grid-1">
      <button  className='planet-button'>
        <img className='planet-image' src={mercury} alt="mercury"/>
      </button>
     </section>
     <section className ="grid grid-2">
      <button  className='planet-button'>
        <img className='planet-image' src={venus} alt="venus"/>  
      </button>
     </section>
     <section className ="grid grid-3">
      <button className='planet-button'>
        <img className='planet-image' src={earth} alt="earth" />
      </button>
     </section>
     <section className ="grid grid-4">
       <button className='planet-button'>
        <img className='planet-image' src={mars} alt="mars"/>
       </button>
     </section>
     <section className ="grid grid-5"> 
       <button className='planet-button'>
        <img className='planet-image' src={jupiter} alt="jupiter"/>
      </button>
     </section>
     <section className ="grid grid-6">
      <button className='planet-button'>
       <img className='planet-image' src={saturn} alt="saturn"/>
      </button>
     </section>
     <section className ="grid grid-7">
      <button className='planet-button'>
        <img className='planet-image' src={neptune} alt="neptune"/>
      </button>
     </section>
     <section className ="grid grid-8">
      <button className='planet-button'>
        <img className='planet-image' src={uranus} alt="uranus"/>
      </button>
     </section>  
     </div> 
    </div>
  )
}

export default PlanetContainer