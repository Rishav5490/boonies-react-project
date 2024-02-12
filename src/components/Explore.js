import React from 'react'
import Frame1 from "../images/Frame1.png";
import Frame2 from "../images/Frame2.png";
import Frame3 from "../images/Frame3.png";
import Frame4 from "../images/Frame4.png";
import location from "../images/location.png";
import Frame50 from "../images/Frame50.png";
import Frame51 from "../images/Frame51.png";
import Frame52 from "../images/Frame52.png";
import Frame53 from "../images/Frame53.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const Explore = () => {
  return (
   <>
    <div className="">
        <div className="abhishek7">
          <div>
            <img src={Frame1} />
          </div>
          <div>
            <img src={Frame2} />
          </div>
          <div>
            <img src={Frame3} />
          </div>
          <div>
            <img src={Frame4} />
          </div>
        </div>
        <div className="abhishek8">
          <div className="star">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#cfc126", fontSize: "20px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#cfc126", fontSize: "20px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#cfc126", fontSize: "20px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#cfc126", fontSize: "20px" }}
            />
            <br />
            <h3>Greenyard Cottage</h3>
            <div>
              <img src={location} />
              Ooty,TN
            </div>
            <hr />
            <br />
            From <s>$800.00</s> $750.00 <br />
            <div>
              <button text="submit">BOOK NOW</button>
            </div>
          </div>

          <div className="abhishek9">
            <div className="star">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <br />
              <h3>Moonwake Cottage</h3>
              <div>
                <img src={location} />
                Narkanda,HP
              </div>
              <hr />
              <br />
              From <s>$800.00</s> $750.00 <br />
              <div>
                <button text="submit">BOOK NOW</button>
              </div>
            </div>
          </div>

          <div className="abhishek10">
            <div className="star">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <br />
              <h3>Ben Wake Heights</h3>
              <div>
                <img src={location} />
                Tehri,UK
              </div>
              <hr />
              <br />
              From <s>$800.00</s> $750.00 <br />
              <div>
                <button text="submit">BOOK NOW</button>
              </div>
            </div>
          </div>

          <div className="abhishek10">
            <div className="star">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#cfc126", fontSize: "20px" }}
              />
              <br />
              <h3>Mainland Vintage</h3>
              <div>
                <img src={location} />
                Chail,HP
              </div>
              <hr />
              <br />
              From <s>$800.00</s> $750.00 <br />
              <div>
                <button text="submit">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abhishek50">
        <div className="rk50-1">
          <br /> <br />
          <h1>Special Attractions</h1>
          <p>Feel It , Believe It</p><br />
          <div>
          <p><h3>The design and facilities of our hotel are also a key and focus for us. We have created a welcoming and inviting atmosphere, with comfortable furnishings.</h3></p>
        </div>
        </div>
        <div className="abhishek51">
        <div >
          <img src={Frame53} />
        </div>
        <div className="pools">
          <img src={Frame51} />
          <img src={Frame52} />
          </div>
       
        <div >
          <img src={Frame53} />
        </div>
      </div>
      </div>
   </>
  )
}

export default Explore