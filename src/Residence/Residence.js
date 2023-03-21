import "./Resident.css";
import { useNavigate } from "react-router-dom";


function Residence() {
  let navigate = useNavigate(); 

  return (
    <div className="flexbox-container-resident">
      <div className="flexbox-item-resident-1">
        <img
          className="landing-page-logo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
        /> 
        <h4 className="reside">R E S I D E </h4>
        <h4
          className="reside"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          I N L U X U R Y
        </h4>

        <h5 className="reside-paragraph"> surrounded by spectacular </h5>
        <h5
          className="reside-paragraph"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          uninterrupted views
        </h5>
        <button
          onClick={() => {
            navigate("/residencehome");
          }}
          className="button-46"
        >
          THE RESIDENCES
        </button>
      </div>
      <div className="flexbox-item-resident-2">
        <img
          src="http://www.thesaruni.com/TheSaruniImages/residencehome.jpg"
          
          alt="residence"
          className="residence-profile"
        />
      </div>
    </div>
  );
}

export default Residence;
 