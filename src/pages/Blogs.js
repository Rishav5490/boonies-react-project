import React from "react";
import Frame9 from "../images/Frame9.png";
import Frame10 from "../images/Frame10.png";
import Frame11 from "../images/Frame11.png";
import Frame13 from "../images/Frame13.png";

function Blogs() {
  return (
    <>
      <div className="blog">
        <div className="abhishek18">
          <div>
            <hr />
            <br />
            <marquee>
              <strong>
               **********___________________BLOGERRRRRR____________________**********
              </strong>
            </marquee>
            <br />
            <hr />
            <h1>Blogs</h1>
            <br />
            <u> <a href="https://www.twitter.com/" alt="twitter" >View All </a></u>
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
                  Nestled in the lap of the mesmerizing Himalayas, Jibhi is a
                  hidden gem in Himachal Pradesh, India. This untouched paradise
                  offers breathtaking natural beauty, serene landscapes, and a
                  tranquil atmosphere that makes it perfect....
                </p>
                <br />
                <br />
                <button>
                  <u>Read More...</u>
                </button>
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
                  Nestled in the lap of the mesmerizing Himalayas, Jibhi is a
                  hidden gem in Himachal Pradesh, India. This untouched paradise
                  offers breathtaking natural beauty, serene landscapes, and a
                  tranquil atmosphere that makes it perfect....
                </p>
                <br />
                <br />
                <button>
                  <u>Read More...</u>
                </button>
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
                  Nestled in the lap of the mesmerizing Himalayas, Jibhi is a
                  hidden gem in Himachal Pradesh, India. This untouched paradise
                  offers breathtaking natural beauty, serene landscapes, and a
                  tranquil atmosphere that makes it perfect....
                </p>
                <br />
                <br />
                <button>
                  <u>Read More...</u>
                </button>
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
      </div>
    </>
  );
}

export default Blogs;
