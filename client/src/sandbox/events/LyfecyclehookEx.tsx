import React, { useEffect } from 'react'
import { useState } from "react";
import { colorLog/* ,getTime  */} from '../utils'


const LyfecyclehookEx = () => {
   const[count, setCount]=useState(()=>{
   colorLog('1', 'blue')
   setTimeout(()=>colorLog('5', 'red'),1000)
   return 0
   })
   
   useEffect(()=>{colorLog('3','green')
  return()=>{colorLog('6','orange')}},[])

   useEffect(()=>{colorLog('4','brown')},[count])
   
  return (
    <>
    <div>
        {colorLog('2','yellow')}
    </div>
    <button onClick={()=>setCount(prev=>prev+1)}> click</button>
    
    </>
  )
}

export default LyfecyclehookEx