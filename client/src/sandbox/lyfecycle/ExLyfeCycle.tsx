import React, { useEffect, useState } from 'react'
import { colorLog } from '../utils'


const ExLyfeCycle = () => {
     const[count,setCount] =useState(()=>{
        colorLog('1', 'blue');
        setTimeout(()=>{colorLog('5','red')},1000);
        return 0;
     })
     useEffect(()=>{colorLog('3', 'green');
    return ()=>{colorLog('6','yellow')}},[]);
     useEffect(()=>{colorLog('4', 'purple')},[count]);
  return (
    <div>
        {colorLog('2', 'orange')}
    <button style={{borderRadius:'50%', marginTop:"50px", padding:"4px"}}
     onClick={()=>setCount(prev => prev + 1)}> click</button>
    </div>
  )
}

export default ExLyfeCycle