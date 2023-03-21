import './Sun.css'
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Sunrise() {
  let navigate =useNavigate()
  return (
    <div>
      <Navbar />
      <div className="flexbox-container-livingroom">
        <div className="flexbox-item-livingroom-1">
          <div className="sheading">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
              className="ggrey-logo"
              alt="logo"
            />

            <h6 className="title">T H E </h6>
            <h1 className="nextt">S P E C T A C U L A R</h1>
            <h1 className="nextt">S K Y G A R D E N S</h1>

          </div>

          <div className="sbody">
          <p className="sunner">Wake up to the sunrise on the East</p>
            
          </div>
          <div className="sparagraph-bottom"> 
          <h4 className="eastward">T H E </h4>
            <h4 className="eastward">E A S T W A R D </h4>
            <h4 className="eastward"> G A R D E N</h4>
            <p className="east-gard">
              is located on the 9th and 10th floor and presents amazing views of
              the Nairobi CBD area.
            </p>

  
          </div>
        </div>
        <div className="flexbox-item-livingroom-2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/wakeupleft.jpg"
            alt="bag"
            className="room-view"
          />
          <h6 className="example one">
            {" "}
            View from Outside
          </h6>
        </div>
        <div className="flexbox-item-livingroom-3">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/wakeupright.jpg"
            alt="bag"
            className="room-view2"
          />
          <h6 className="example two">
            View from outside
          </h6>
        </div>
      </div>
      <h1
        onClick={() => {
          navigate("/sunset");
        }}
        className="next"
      >
        SUNSET <FaAngleDown />
      </h1>

    </div>
  );
}

export default Sunrise;
