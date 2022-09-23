import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Utilities = () => {
  const [spaceData, setSpaceData] = useState([])


  useEffect(() => {
    axios({
    method: 'get',
    url:'https://api.le-systeme-solaire.net/rest/bodies/',
    data: 'data',
    key: 'data.id'
  })
     .then(res =>{
      setSpaceData(res.data.bodies)
     })
     .catch(err => {
      console.log(err)
     })
  }, [])

  const displayData = () => {
  //   console.log(`--------------------------------------------------`)
 console.log(`spaceData1234`,spaceData)
  let info = spaceData.map((data, index) => 
    // console.log(`line 48`, data)
      <p key={index}>{data.id}</p> //needs to be <Planet />
    )
    console.log(`info`, info)
    return info
  }

  return (
    <div>
      {displayData()}
    </div>
  )
}


export { Utilities };


