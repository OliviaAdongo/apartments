import "./Amenities.css";
import { useNavigate } from "react-router-dom";

function Amenities() {
  let navigate = useNavigate();

  return ( 
    <div className="flexbox-container-amenity">
      <div className="flexbox-item-amenity-1">
        <img
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          className="landing-page-logo"
          alt="logo"
        />
        <h4 className="reside style">A L I F E S T Y L E </h4>
        <h4
          className="reside style"
         
        >
          {" "}
          M E T I C U L O U S L Y
        </h4>
        <h4
          className="reside style"
      
        >
          {" "}
          C U R A T E D
        </h4>

        <h5 className="reside-paragraph disc">
          {" "}
          for the most discerning urban{" "}
        </h5>
        <h5
          className="reside-paragraph disc"
          
        >
          {" "}
          connoisseur
        </h5>

        <button
          onClick={() => {
            navigate("/amenitieshome");
          }}
          className="button-46"
        >
          THE AMENITIES
        </button>
      </div>
      <div className="flexbox-item-amenity-2">
      <img
        src="http://www.thesaruni.com/TheSaruniImages/rover.jpg"
          alt="residence"
          className="amenity-profile"
        />
      </div>
    </div>
  );
}

export default Amenities;
