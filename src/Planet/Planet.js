import React from 'react'
import { Utilities } from '../Utilities'


const Planet = ({spaceData, id}) => {



  return (
    <div>
        <Utilities spaceData={spaceData.map((planet) => planet.id)}/>
    </div>
  )
}

export default Planet