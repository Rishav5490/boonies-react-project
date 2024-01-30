import React from 'react'
import picture from '../images/picture.png';
import Frame5 from "../images/Frame5.png";
import Frame6 from "../images/Frame6.png";
import Frame7 from "../images/Frame7.png";
import Frame8 from "../images/Frame8.png";


function Destination() {
  return (
    <>
    <div className="rishi30">
      <img src={picture} />
    </div>

    <div className='rishi31'>
      
      <input type='text' placeholder='Search A Destination'    /> 
      <datalist id="city">
      <option value="jibhi,HP">HP</option>
      <option value="Vikasnagar,UK">UK</option>
      <option value="Barot,HP">HP</option>
      <option value="Spiti,HP">HP</option>
      </datalist>
    

      <button>Search</button> 
      <br />
      </div>
     
      <div className="abhishek14">
        <div>
          <img src={Frame5} />
        </div>
        <div>
          <img src={Frame6} />
        </div>
        <div>
          <img src={Frame7} />
        </div>
        <div>
          <img src={Frame8} />
        </div>
      </div>
      
      <div className="abhishek14">
        <div>
          <img src={Frame7} />
        </div>
        <div>
          <img src={Frame8} />
        </div>
        <div>
          <img src={Frame5} />
        </div>
        <div>
          <img src={Frame6} />
        </div>
      </div>

      <div className="abhishek14">
        <div>
          <img src={Frame6} />
        </div>
        <div>
          <img src={Frame5} />
        </div>
        <div>
          <img src={Frame8} />
        </div>
        <div>
          <img src={Frame7} />
        </div>
      </div>

      <div className="abhishek14">
        <div>
          <img src={Frame7} />
        </div>
        <div>
          <img src={Frame8} />
        </div>
        <div>
          <img src={Frame6} />
        </div>
        <div>
          <img src={Frame5} />
        </div>
      </div>

      <div className="abhishek14">
        <div>
          <img src={Frame8} />
        </div>
        <div>
          <img src={Frame7} />
        </div>
        <div>
          <img src={Frame5} />
        </div>
        <div>
          <img src={Frame6} />
        </div>
      </div>



      

    
    
    </>
  )
}

export default Destination ;