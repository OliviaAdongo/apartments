import './Neighborhood.css'
import { useNavigate } from "react-router-dom";


function Neighborhood() {
  let navigate = useNavigate();

  return (
    <div className="flexbox-container-neighborhood">
      <div className="flexbox-item-neighborhood-1">
      <img
      src='http://www.thesaruni.com/TheSaruniImages/neighborhoodhome.jpg'
        alt="residence"
        className="neighborhood-profile"
      />
      </div>


      <div className="flexbox-item-neighborhood-2">

      <img
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          className="landing-page-logo"
          alt="logo"
        />
        <h4 className="reside  ">N A I R O B I ' S </h4>
        <h4
          className="reside  "

        >
          {" "}
          E X C L U S I V E
        </h4>
        <h4
          className="reside  "
        
        >
          {" "}
         A D D R E S S 
        </h4>

        <h5 className="reside-paragraph">A statement of luxury and prestige </h5>
       

        <button
          onClick={() => {
            navigate("/neighborhoodhome");
          }}
          className="button-46"
        >
          THE NEIGHBORHOOD
        </button>
      </div>
    </div>
  )
}

export default Neighborhood