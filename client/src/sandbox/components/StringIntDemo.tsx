import React from 'react'

const StringIntDemo = () => {
    // let bool = true;
    let bool =false;
    const y = 45;
    
  return (
    <>
    {bool?'yes':'no'} <br />
    {y*2}
    
    </>
  )
}

export default StringIntDemo