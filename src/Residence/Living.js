import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal'

import Navbar from "../Navbar/Navbar";
import "./Rooms.css";

function Living() {
  let navigate = useNavigate();
  return ( 
    <div className="kubwa-sun">
    <div>
      <Navbar />{" "}
    </div>
    <div class="grid-container-sun">
      <div class="grid-child purple" style={{ marginRight: "15px" }}>
        <div className="the-sun room">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/logowhite.png"
            className="residence-home-logo-grey spec"
            alt="logo"
          />

          <h6 className="trire">T H E </h6>
          <h1 className="tir"> R E S I D E N C E S </h1>
         
        </div>


        <div className="disclaimer y">
        <h4
              className="activelink"
              onClick={() => {
                navigate("/livingroom");
              }}
              id="rooms"
            >
              LIVING AREA
            </h4>

            <h4
              onClick={() => {
                navigate("/bedroom");
              }}
              id="rooms"
            >
              BEDROOMS
            </h4>
            <h4
              onClick={() => {
                navigate("/kitchen");
              }}
              id="rooms"
            >
              KITCHEN
            </h4>
        


          <p className="coddler">
          <h4 id="disclaimer">DISCLAIMER</h4>
          These 3 & 2 bedroom aparment artistic
          impressions or image renders contained 
          on this website are for illustrative 
           purposes only and should not be relied
          upon as being complete or accurate
          </p>
        </div>
      </div>

      <div class="grid-child green">
        <img
          src="http://www.thesaruni.com/TheSaruniImages/livingleft.jpg"
          alt="bag"
          className="ddsun"
        />
        <p className="example ones">
        3 Bedroom apartment living area example
        </p>
      </div>
      <div class="grid-child pink">
        <img
          src="http://www.thesaruni.com/TheSaruniImages/livingright.jpg"
          alt="bag"
          className="ddsun"
        />
        <p className="example twos">
        2 Bedroom apartment living area example
        </p>
      </div>
    </div>

    
  </div>

    
  );
}

export default Living;
