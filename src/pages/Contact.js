// import React from 'react'
// import logo from "../images/logo.png";

// const About = () => {
//   return (
// <>
//     <h1>Contact Us</h1>

    

//       </>
//   )
// }

// export default About ;



// ContactUs.js

import React, { useState } from 'react';
import "./contact.css";
import logo from '../images/logo.png'
import Frame50 from "../images/Frame50.png"; 
import phone from "../images/phone.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to backend
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div>
    <div className="contus"> <h2>Book Now<br /> <blink><a href="/sign"><img src={logo} /></a> <marquee>******________CONTACT US FOR LIVE ARTIST PERFORMANCES________****** </marquee></blink> <blink>PH:-7018693350</blink></h2>
    </div></div>
    <div className="contact">
      <div>
      <img src={Frame50} />
      </div>
    <div  className="contact1">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div>
      <img src={Frame50} />
      </div>
    <div className="dcwu">
      <h4>Direct Contact with us!</h4>
      <img src={phone} />
      <input type="number" placeholder='' /><br />
      <img src={phone} />
      <input type="email" placeholder='' /><br />
      <img src={phone} />
            <input type="time" placeholder='5(working days)' />
      

      <br />


    </div>
    </div>


    </>
  );
};

export default Contact ;

