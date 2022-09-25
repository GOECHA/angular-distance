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
      <button  className='planet-button mercury-btn'>
        <img className='planet-image mercury' src={mercury} alt="mercury" onClick={() =>{console.log(`I'm mercury`)}}/>
      </button>
     </section>
     <section className ="grid grid-2">
      <button  className='planet-button venus-btn'>
        <img className='planet-image venus' src={venus} alt="venus" onClick={() =>{console.log(`I'm venus`)}}/>  
      </button>
     </section>
     <section className ="grid grid-3">
      <button className='planet-button earth-btn'>
        <img className='planet-image earth' src={earth} alt="earth" onClick={() =>{console.log(`I'm earth`)}}/>
      </button>
     </section>
     <section className ="grid grid-4">
       <button className='planet-button mars-btn'>
        <img className='planet-image mars' src={mars} alt="mars" onClick={() =>{console.log(`I'm mars`)}}/>
       </button>
     </section>
     <section className ="grid grid-5"> 
       <button className='planet-button jupiter-bt'>
        <img className='planet-image jupiter' src={jupiter} alt="jupiter" onClick={() =>{console.log(`I'm jupiter`)}}/>
      </button>
     </section>
     <section className ="grid grid-6">
      <button className='planet-button saturn-btn'>
       <img className='planet-image saturn' src={saturn} alt="saturn" onClick={() =>{console.log(`I'm saturn`)}}/>
      </button>
     </section>
     <section className ="grid grid-7">
      <button className='planet-button neptune-btn'>
        <img className='planet-image neptune' src={neptune} alt="neptune" onClick={() =>{console.log(`I'm neptune`)}}/>
      </button>
     </section>
     <section className ="grid grid-8">
      <button className='planet-button uranus-btn'>
        <img className='planet-image uranus' src={uranus} alt="uranus" onClick={() =>{console.log(`I'm uranus`)}}/>
      </button>
     </section>  
     </div> 
    </div>
  )
}

export default PlanetContainer