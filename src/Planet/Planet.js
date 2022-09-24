import React from 'react'
import { Utilities } from '../Utilities'
import './Planet.css'

const Planet = ({findPlanet, spaceData, id, key, name, moons}) => {
// const [planet, setPlanet] = useState('')
//if spaceData.isPlanet === true planetArr.push(spaceData) &&  moonArr.push(spaceData.name)
// spaceData.includes moons. moonArr.push(spaceData.name)
//id a user selects a planet, displayDestinationArr.push(spaceData.EnglishName)
// 




  return (
    <div className="planet">
        <ImageData onCLick={(()=>{findPlanet})} />
        <Utilities spaceData={spaceData} id={id}/>
    </div>
  )
}

export default Planet