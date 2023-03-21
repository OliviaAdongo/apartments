import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Rooms.css";

function Bedroom() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flexbox-container-livingroom">
        <div className="flexbox-item-livingroom-1">
          <div className="rheading">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/logowhite.png"
              className="rgrey-logo"
              alt="logo"
            />

            <h6 className="topic title">T H E </h6>
            <h1 className="topic next"> R E S I D E N C E S</h1>
          </div>

          <div className="sidebar-center">
            <h4

              onClick={() => {
                navigate("/livingroom");
              }}
              id="rooms"
            >
              LIVING AREA
            </h4>
            <h4

            className="activelink"
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
              {" "}
              KITCHEN
            </h4>
          </div>
          <div className="paragraph-bottom-disclaimer">
            <h4 id="disclaimer">DISCLAIMER</h4>
            <p id="disclaimerr">These 3 & 2 bedroom aparment artistic</p>
            <p id="disclaimer">impressions or image renders contained </p>
            <p id="disclaimer">on this website are for illustrative </p>
            <p id="disclaimer"> purposes only and should not be relied</p>
            <p id="disclaimer">upon as being complete or accurate</p>
          </div>
        </div>
        <div className="flexbox-item-livingroom-2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/bedleft.jpg"
            alt="bag"
            className="room-view"
          />
          <h6 className="example one">
            {" "}
            3 Bedroom apartment living area example
          </h6>
        </div>
        <div className="flexbox-item-livingroom-3">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/bedright.jpg"
            alt="bag"
            className="room-view2"
          />
          <h6 className="example two">
            2 Bedroom apartment living area example
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Bedroom;
