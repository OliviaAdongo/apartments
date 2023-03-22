import "./Ataglance.css";
import { FaAngleDown } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

function Glance() {
  return (
    <div className="kubwa">
      <div>
        <Navbar />{" "} 
      </div>
      <div className="section1">
        <div class="grid-ccontainer-element">
          <div class="grid-child-element purple at">
            <div className="glance1">
              <h4 className="topper r">
                A M E N I T I E S <a className="toper"> A T</a>{" "}
              </h4>
              <h4 className="topper">
                <a className="toper">A </a> G L A N C E
              </h4>
            </div>

            <div className="glance two">
              <div className="logosection">
                <img
                  src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amenn">LEISURE</h1>
              </div>
              <div className="list-amenities  two">
                <ul>
                  <li>Reception lobby and management office</li>
                  <li>2 High speed lifts</li>
                  <li>
                    24Hr Security services at the gate and on property intercom
                  </li>
                  <li>Ample Parking</li>
                  <li>Full backup generator</li>
                  <li>24 Hr CCTV</li>
                  <li>Perimeter electric fence</li>
                  <li>Borehole</li>
                </ul>
              </div>
            </div>

            <div className="glance three">
              <div className="logosection">
                <img
                  src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amenn well">WELLNESS</h1>
              </div>
              <div className="list-amenities three">
                <ul>
                  <li>Modern fitted gym</li>
                  <li>Sauna</li>
                  <li>Steam Room</li>
                </ul>
              </div>
            </div>

            <div className="glance four">
              <div className="logosection">
                <img
                  src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amenn">REJUVENATION</h1>
              </div>
              <div className="list-amenities  four">
                <ul>
                  <li>East and West Skygardens</li>
                  <li>Infinity Heated poool</li>
                  <li>Ground level manicured and landscaped coutyard garden</li>
                </ul>
              </div>
            </div>
          </div> 

          <div class="grid-child-element green at">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/avilability.jpg"
              alt="residence"
              className="glancepic"
            />
          </div>
        </div>
      </div>
      <section className="explore-section">
        <h1 className="explorer">
          <a href="/sunup" className="downarrow">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default Glance;
