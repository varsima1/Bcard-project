import { color } from '@mui/system';
import React from 'react'

const NumbersInColor = () => {

let str ='Or';
let check = true;
return (
    < >
 <h4 style={{color:check?"red":"green"}}>{str}</h4>   
    </>
)
}

export default NumbersInColor