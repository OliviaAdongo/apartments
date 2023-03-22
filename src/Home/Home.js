import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  let navigate = useNavigate()
  return (
    <div>
<div className="flexbox-container">
    <div className="header-section">

    </div>
      <div className="logo-section-landing">
        <img
          src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
          alt="logo"
          className="home-logo"
         />
      </div>
      <div className="home-content">
        <p className="lore">A L U X U R I O U S</p>
        <p className="lore">S A N C T U A R Y</p>
        <p className="home-nest">nested in unparalleled tranquility</p>
      </div>
      
    </div>
    <h1
        onClick={() => {
          navigate("/animation");
        }}
        className="next"
      >
        EXPLORE <FaAngleDown />
      </h1>
    </div>
    
  );
}

export default Home;
