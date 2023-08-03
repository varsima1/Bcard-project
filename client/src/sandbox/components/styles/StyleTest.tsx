import React, {CSSProperties} from 'react'
import "./design.css"

const StyleTest = () => {
    const h1St:CSSProperties={
    backgroundColor:'yellow'
    }
    const h2ST:CSSProperties={
        color:"red",
        backgroundColor:"purple"
    }
    let isGreen =true;
    isGreen=false;
  return (
    <>
    <h1 style={h1St}>Title</h1>
    <h2 style={h2ST}>subtitle</h2>
    <h3 style={{color:"orangered"}}>inline</h3>
    <hr />
    <p className='design'>paragraph</p>
    <span style={{backgroundColor:isGreen? "green":"blue"}}>SPAN</span>
    </>
  )
}

export default StyleTest