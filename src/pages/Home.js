import react from "react";
import logo from "../images/logo.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import Molecule1 from "../images/Molecule1.png";
import Molecule2 from "../images/Molecule2.png";
import Molecule3 from "../images/Molecule3.png";
import Molecule4 from "../images/Molecule4.png";
import Molecule5 from "../images/Molecule5.png";
import rate1 from "../images/rate1.png";
import rate2 from "../images/rate2.png";
import rate3 from "../images/rate3.png";
import rate4 from "../images/rate4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import location from "../images/location.png";
import Frame12 from "../images/Frame 12.png";
import Cabin from "../images/Cabin.png";
import Nature from "../images/Nature.png";
import Cleanliness from "../images/Cleanliness.png";
import Frame5 from "../images/Frame5.png";
import Frame6 from "../images/Frame6.png";
import Frame7 from "../images/Frame7.png";
import Frame8 from "../images/Frame8.png";
import Vector from "../images/Vector.png";
import Frame9 from "../images/Frame9.png";
import Frame10 from "../images/Frame10.png";
import Frame11 from "../images/Frame11.png";
import Frame13 from "../images/Frame13.png";
import logoend from "../images/logoend.png";
import Explore from "../components/Explore";
const Home = () => {
  return (
    <>
      <div className="abhishek1">
        <img src={image1} />
        {/* <img src={image2} />
        <img src={image3} /> */}
        </div>
        
        

        <div className="abhishek4">
          <form>
            <div>
              <label>CheckIn</label>
              <input type="date" placeholder="Add Date" />
            </div>
            <div>
              <label>CheckOut</label>
              <input type="date" placeholder="Add Date" />
            </div>
            <div>
              <label>Cetegories</label>
              <br />

              <select>
                {" "}
                <option></option>
                <option>Select</option>
                <option> Cottages</option>
                <option> Tent </option>
                <option>Tree House</option>
                <option> Hut </option>
                <option>Camp</option>
              </select>
            </div>
            <div>
              <label>Guests</label>
              <input type="text" placeholder="Add Guests" />
            </div> 
            <div>
              <label>Location</label>
              <img src={location} />
              <input type="text" placeholder="Chail,HP" />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
        <br />
      
      <div className="abhishek5">
        <h1>Explore Stays</h1>
      </div>
      <div className="abhishek6">
        <div>
          <img src={Molecule1} />
          <h4>Cottege</h4>
        </div>
        <div>
          <img src={Molecule2} />
          <h4>Tent</h4>
        </div>
        <div>
          <img src={Molecule3} />
          <h4>Tree House</h4>
        </div>
        <div>
          <img src={Molecule4} />
          <h4>Hut</h4>
        </div>
        <div>
          <img src={Molecule5} />
          <h4>Camp</h4>
        </div>
      </div>
      <br />
      <br />
      <Explore />
      <br />
      <br />
      <br />
      <div>
        <img className="abhishek11" src={Frame12} />
        <div className="abhishek11-box">
          <br />
          <img src={logo} />
          <h1>
            Exploring New
            <br />
            Destinations Everyday
          </h1>
          <hr />

          <p>
            Lorem mnbjhj bjhgdfkj nmbvhgjm,.-box xx vbcgfhf asbvcxc
            ndsggh bfytfv jbftdfghj bjhgyufh mnhyuf -box xx vbcgfhf asbvufgkj mnbjhj bjhuy m
          </p>
          <br />
         <u>OUR STORY</u>
        </div>
      </div>
      <div className="abhishek12">
        <div>
          <div>
            <img src={Cabin} />
          </div>

          <h1>Stay Facilities</h1>
          <p>
            The design and facilities of our hotel are also a key and focus for
            us. We have created a welcoming and inviting atmosphere, with
            comfortable furnishings
          </p>
          <hr />
        </div>

        <div>
          <div>
            <img src={Nature} />
          </div>

          <h1>Close To Nature</h1>
          <p>
            The design and facilities of our hotel are also a key and focus for
            us. We have created a welcoming and inviting atmosphere, with
            comfortable furnishings
          </p>
          <hr />
        </div>

        <div>
          <div>
            <img src={Cleanliness} />
          </div>

          <h1>Cleanlinesss</h1>
          <p>
            The design and facilities of our hotel are also a key and focus for
            us. We have created a welcoming and inviting atmosphere, with
            comfortable furnishings
          </p>
          <hr />
        </div>
      </div>
      <br />
      <div className="abhishek13">
        <div>
          <h1>Popular Destinations</h1>
          <br /> <br /> <br />
          <u>View All</u>
          <br />
          <br />
          <br />
        </div>
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
      <br />
      <br />
      <br />
      <hr />
      <div className="abhishek15">
        <h4>#Testimonial</h4>
        <br />
        <h2>What Our Visitors Say</h2>
      </div>
      <div className="abhishek16">
        <div className="star1">
          <div>
            <img src={Vector} />
            <h2>Angelina M.</h2>

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
            <p>
              The design and facilities of our hotel are also a key and focus
              for us. We have created a welcoming and inviting atmosphere, with
              comfortable furnishings facilities of our hotel are also a key.
            </p>
          </div>
        </div>

        <div className="abhishek17">
          <div>
            <img src={Vector} />
            <h2>Mark T.</h2>

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
            <p>
              The design and facilities of our hotel are also a key and focus
              for us. We have created a welcoming and inviting atmosphere, with
              comfortable furnishings facilities of our hotel are also a key.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="abhishek18">
        <div>
          <br /> <br />
          <h1>Blogs</h1>
          <br />
          <u>View All</u>
          <br />
          <br />
        </div>
      </div>
      <div className="abhishek19">
        <div className="abhishek199">
          <div>
            <img src={Frame9} />
            <div>
              <h2>Exploring Paradise:The Best Places to Visit in Jibhi.</h2>
            </div>
            <hr />
            <div className="box-19">
            <p>
              Nestled in the lap of the mesmerizing Himalayas, Jibhi is a hidden
              gem in Himachal Pradesh, India. This untouched paradise offers
              breathtaking natural beauty, serene landscapes, and a tranquil
              atmosphere that makes it perfect....
            </p>
            <br />
            <br />
            <button><u>Read More...</u></button>
            </div>
          </div>
        </div>
        <div className="abhishek20">
          <div>
            <img src={Frame10} />
            <div>
              <h2>
                Unveiling the Treasures of Spiti Valley : best Places To Visit
              </h2>
            </div>
            <hr />
            <div className="box-20">

            <p>
              Nestled in the lap of the mesmerizing Himalayas, Jibhi is a hidden
              gem in Himachal Pradesh, India. This untouched paradise offers
              breathtaking natural beauty, serene landscapes, and a tranquil
              atmosphere that makes it perfect....
            </p>
            <br />
            <br />
            <button><u>Read More...</u></button>
            </div>
          </div>
        </div>
        <div className="abhishek21">
          <div>
            <img src={Frame11} />
            <div>
              <h2>
                Discovering the Hidden Gem of Himachal Pradesh : Barot Valley
              </h2>
            </div>
            <hr />
            <div className="box-21">

            <p>
              Nestled in the lap of the mesmerizing Himalayas, Jibhi is a hidden
              gem in Himachal Pradesh, India. This untouched paradise offers
              breathtaking natural beauty, serene landscapes, and a tranquil
              atmosphere that makes it perfect....
            </p>
            <br />
            <br />
            <button><u>Read More...</u></button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="abhishek22">
        <img src={Frame13} />
      </div>
      <div className="abhishek23">
        <div className="abhishek223">
          <h1>Newsletter</h1>

          <div className="abhishek2223"> 
             <span>
              <fieldset>
                <legend>Name*</legend>
                <input type="text" placeholder="Enter your Name" />{" "}
              </fieldset>
              <br />

              <fieldset>
                <legend>Email*</legend>
                <input type="email" placeholder="Enter your Email" />{" "}
              </fieldset>
            </span>
            <br />
            <br /> 
           

          <button>Subscribe</button>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <div className="abhishek24">
        <div>
          <br /> <br />
          <h1>Top Trending</h1>
          <br />
          <u>View All</u>
          <br />
          <br />
        </div>
      </div>
      
      <Explore />
    </>
  );
};
export default Home;
