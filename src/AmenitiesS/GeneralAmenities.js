import "./Extras.css";
import Courtyard from "./Courtyard";
import Gym from "./Gym";
import Pool from "./Pool";
import Navbar from "../Navbar/Navbar";
import { FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GeneralAmenities() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flexbox-container-infinity">
        <div className="flexbox-item-residencehomee-1">
          <div className="rheading">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
              className="rwhite-logo"
              alt="logo"
            />

            <h6 className="trre">T H E </h6>
            <h1 className="tir"> A M E N I T I E S</h1>
          </div>
          <div className="bodry">
            <h1 className="luxury">CURATED FOR</h1>
            <h1 className="luxury">LEISURE</h1>

            <h1 className="luxury">WELLNESS AND</h1>

            <h1 className="luxury">REJUVENATION</h1>

            <p className="paragraphh-bottom">
              The heated infinity swimming pool
            </p>
            <p className="paragraphh-bottom">The Gym</p>
            <p className="paragraphh-bottom"> The Courtyard</p>
          </div>
        </div>

        <div className="flexbox-item-infinity-2">
          <Pool />
        </div>
        <div className="flexbox-item-infinity-3">
          <Gym />
        </div>
        <div className="flexbox-item-infinity-4">
          <Courtyard />
        </div>
      </div>
      <h1
        onClick={() => {
          navigate("/menu");
        }}
        className="next"
      >
        GO TO MENU <FaAngleUp />
      </h1>
    </div>
  );
}

export default GeneralAmenities;
