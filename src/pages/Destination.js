import React from 'react'
import picture from '../images/picture.png';

function Destination() {
  return (
    <>
    <div className="rishi30">
      <img src={picture} />
    </div>

    <div className='rishi31'>
      <input type='text' placeholder='Search A Destination'    /> 
      <button>?</button> 
    </div>

    
    
    </>
  )
}

export default Destination ;