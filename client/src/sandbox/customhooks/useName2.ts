import React, { useState } from 'react'


const useName2 = (initialName:string='') => {
    const [name, SetName]= useState(initialName);
    
  return (
    {name,SetName}
  )
}

export default useName2