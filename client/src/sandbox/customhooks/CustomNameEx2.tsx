import React from 'react'
import useName2 from './useName2'

const CustomNameEx2 = () => {
    const {name,SetName} =useName2()
  return (
    <div>
        <p>{name}</p>
        <input type="text" onChange={(e)=>SetName(e.target.value)} />
    </div>
  )
}

export default CustomNameEx2