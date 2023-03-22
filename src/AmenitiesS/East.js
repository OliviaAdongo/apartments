import "./Jua.css";
// import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

function East() {
  // let navigate = useNavigate();

  return ( 
    <div className="kubwa-sun">
      <div>
        <Navbar />{" "}
      </div>
      <div class="grid-container-sun">
        <div class="grid-child purple" style={{marginRight:"15px"}}>
          <div className="the-sun"> 
            <img
              src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
              className="residence-home-logo-grey spec"
              alt="logo"
            />

            <h6 className="trire">T H E </h6>
            <h1 className="tir"> S P E C T A C U L A R</h1>
            <h1 className="tir">S K Y G A R D E N S</h1>
          </div>
 
          <div className="center1">
            <p className="carey">Wake up to the sunrise on the East</p>
          </div>

          <div className="disclaimer y">
            <h4 className="jirani">T H E </h4>
            <h4 className="jirani">E A S T W A R D </h4>
            <h4 className="jirani"> G A R D E N</h4>
            <p className="coddler">
              is located on the 9th and 10th floor and presents amazing views of
              the Nairobi CBD area.
            </p>
          </div>

        </div>

        <div class="grid-child green">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/wakeupleft.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="ddsun"
          />
          <p className="example ones">View from outside</p>
        </div>
        <div class="grid-child pink">
          <img 
            src="http://www.thesaruni.com/TheSaruniImages/wakeupright.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="ddsun"
          />
          <p className="example twos">View from outside</p>
        </div>
      </div>

      <section className="explore-section">
        <h1 className="explorer">
          <a href="/sundown" className="downarrow">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default East;
