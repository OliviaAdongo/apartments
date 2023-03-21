import "./Neigh.css";
import Navbar from "../Navbar/Navbar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NeighMap() {
  let navigate = useNavigate();
  return (
    <div className="parent">
      <Navbar />
      <div className="flexbox-container-neighhome">
        <div className="flexbox-item-neighhome1">
          <div className="mheading">
            <h2 className="gain">GAIN CENTRAL</h2>

            <h2 className="gain"> CONNECTIVITY</h2>

            <h2 className="gain"> TO RETAIL,</h2>

            <h2 className="gain"> RECREATIONAL </h2>
            <h2 className="gain"> & ESSENTIAL SERVICES</h2>
          </div>

          <div className="mbody">
            <h5 className="gain-top">PROXIMITY TO MAJOR COMMERCIAL HUBS:</h5>
            <ul className="mahali">
              <li className="place">Westlands</li>
              <li className="place">Lavington</li>
              <li className="place">Kileleshwa</li>
              <li className="place">Kilimani</li>
              <li className="place">Yaya</li>
              <li className="place">Nairobi CBD</li>
            </ul>
            <h5 className="gain-top top">BYPASS CONECTIVITY</h5>
            <p className="jkia">20 min from JKIA via the Expressway</p>
            <p className="jkia">
              Easy access to Ngong' Road, Kileleshwa, Kilimani and Loresho.
            </p>
          </div>
        </div>
        <div className="flexbox-item-neighhome2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/map.jpg"
            alt="residence"
            className="neighborhood-image"
          />
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

export default NeighMap;
