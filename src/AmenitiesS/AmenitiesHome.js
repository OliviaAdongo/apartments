import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Amen.css";
 
function AmenitiesHome() {
  let navigate = useNavigate()
  return (
    <div className="parent">
      <Navbar />
      <div className="flexbox-container-amenities">
        <div className="flexbox-item-amenities1">
          <div className="aheading">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
              className="rwhite-logo"
              alt="logo"
            />

            <h6 className="trre">T H E </h6>
            <h1 className="tir"> A M E N I T I E S</h1>
          </div>
          <div className="abody">
            <h1 className="carey">C A R E F U L L Y</h1>
            <h1 className="carey">C O N S I D E R E D & </h1>
            <h1 className="carey">M E T I C U L O U S L Y </h1>
            <h1 className="carey">D E S I G N E D</h1>
            <p className="paragraph-bottommmer">
            With uninterrupted views from each apartment, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living experience
          </p>
          </div>
          
        </div>
        <div className="flexbox-item-amenities2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/amenities.jpg"
            alt="residence"
            className="lobby-image"
          />
        </div>
      </div>
      <h1
        onClick={() => {
          navigate("/sunup");
        }}
        className="next"
      >
        EXPLORE AMENITIES <FaAngleDown />
      </h1>
    </div>
  );
}

export default AmenitiesHome;
