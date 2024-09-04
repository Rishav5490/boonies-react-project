import React from "react";
import logoend from "../images/logoend.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import  phone  from "../images/phone.png";
const Footer = () => {
  return (
    <>
      <div className="abhishek25">
        <br />
        <br />
        <br />

        <div className="abhishek125">
          <img src={logoend} />
        </div>
        <br />
        <div className="abhishek126">
        *****-*-*-*-*-*-*-*-*-*-*-*-*-*-<h2><blink><marquee>*****BOONIES*****</marquee></blink></h2>-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*****
          {/* ------------------------~~~~~~~~~~~~------------------------- */}
        </div>
        <br />

        <div className="abhishek26">
          <ul>
            <li>
              {" "}
              <a href="https://www.facebook.com/" alt="facebook">
                <img src={facebook} />
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.instagram.com/" alt="instagram">
                <img src={instagram} />
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.twitter.com/" alt="twitter">
                <img src={twitter} />
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.linkedin.com/" alt="linkedin">
                <img src={linkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="abhishek27">
          <p>
            Nestled in the lap of the mesmerizing Himalayas, Jibhi is a hidden
            gem in Himachal Pradesh, India. This untouched paradise offers
            breathtaking natural beauty, serene landscapes, and a tranquil
            atmosphere that makes it perfect.
          </p>
        </div>
        <br />
        <br />
        <br />

        <div className="abhishek28">
          <ul>
            <li>
              <a href="destination">DESTINATION</a>
            </li>
            <li>
              <a href="cotteges">COTTEGES</a>
            </li>
            <li>
              <a href="blogs">BLOGS</a>
            </li>
            <li>
              <a href="our story">OUR STORY</a>
            </li>
            <li>
              <a href="contact">CONTACT US</a>
            </li>
          </ul>
        </div>
        <br />
        
        <hr />
        <br />
        <div className="abhishek29">
        <div className="abhishek30">
       
<legend> <img src={phone} /></legend> Drop A Line
          <br />
          +000 (123) 456 88
        </div>
        <div className="abhishek31">
       <legend> <img src={phone} /></legend>
          Email Address
          <br />
          theboonies@gmail.com
        </div>
        <div className="abhishek32">
        <legend>  <span><img src={phone} /></span></legend>
          Visit Office
          <br />
          Boonies, F-468, Punjab, IN
          
        </div>
        <br />
        <br />
        <br />
        <br />

        </div>
      </div>
    </>
  );
};

export default Footer;
