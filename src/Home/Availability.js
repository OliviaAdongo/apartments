
import "./Availability.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function Availability() {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="griid-container-elementt">
        <div className="grid-child avi">
          <div className="headingsss">
            <div className="lux-head">
              <h1 className="topic-lux">L U X U R Y </h1>
              <h1 className="topic-lux">U N I T S </h1>
              <h1 className="topic-lux">A V A I L A B L E </h1>
            </div>
            <div className="lux-head">
              <h1 className="topic-lux">C A L L </h1>
              <p className="topic-luxx">0  7  5  9 <a style={{color:"goldenrod"}}> it</a> 2 7 8<a style={{color:"goldenrod"}}> it</a>  5 6 4</p>
              <p className="topic-luxx">0 7 4 5   <a style={{color:"goldenrod"}}> it     </a>    4 6  6 <a style={{color:"goldenrod"}}> it</a> 3 4  6</p>
              <h3 className="topic-lux-reserve">to make your reservation</h3>
            </div>
          </div>

          <div className="sect-body">
            <div className="body-one">
              <div className="lux-body-upjuu">
                {/* <h1>1</h1> */}
                <h2 className="body-lux tittle"> <a className="number">  1</a> BEDROOM APARTMENTS</h2>

                <ul>
                  <li className="body-lux one">
                    Starting from 77sqm (829 sqft)
                  </li>
                  <li className="body-lux one">
                    Beautiful West side facing Courtyard
                  </li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                </ul>
              </div>
              <div className="lux-body-upple">
                <h2 className="body-lux tittle"><a className="number">  2</a>  BEDROOM APARTMENTS</h2>
                <ul>
                  <li className="body-lux one">Starting from 132sqm (1421sqft)</li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one"> Open plan Kitchen fit with European appliances</li>
                  <li className="body-lux one">Well-ventilated Laundry Yard and </li>
                  <li className="body-lux one">Beautiful useable sizeable balconies</li>
                  <li className="body-lux one">
                    Amazing views both Surbub on North and Either East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
            </div>

            <div className="body-two">
              <div className="lux-body-updown">
                <h2 className="body-lux tittle"><a className="number">  3</a> BEDROOM APARTMENTS</h2>
                <ul>
                  <li className="body-lux one"> Starting from 218 sqm (2347sqft)</li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one"> Open plan Kitchen fit with European appliances</li>
                  <li className="body-lux one">Well-ventilated Laundry Yard and </li>
                  <li className="body-lux one">Beautiful useable sizeable balconies</li>
                  <li className="body-lux one">
                    3 beedrooms have spectacular views both Surbub on North and
                    Either East Side City View or West Side Views
                  </li>
                </ul>
              </div>
              <div className="lux-body">
                <h2 className="body-lux tittle"><a className="number">  4</a> DUPLEX PENTHOUSES</h2>
                <ul>
                  <li className="body-lux one"> Starting from 623sqm (6706sqft)</li>
                  <li className="body-lux one">Private Rooftop terrace</li>
                  <li className="body-lux one">DSQ with private access and well-ventilated</li>
                  <li className="body-lux one"> Open plan Kitchen fit with European appliances</li>
                  <li className="body-lux one">
                    Luxurious West side facing courtyard views East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
            </div> 
           </div>

        </div>
        <div class="grid-child avik">
          <img
          src="http://www.thesaruni.com/TheSaruniImages/avilability.jpg"
            // src="https://i.pinimg.com/564x/ab/b3/00/abb30014282ef028df8e1a51345eaecd.jpg"
            alt="residence"
            className="avail"
          />
        </div>
      </div>
      {/* <div className="explore-avia">
        <h1
          onClick={() => {
            navigate("/amenities");
          }}
       className='nav-to' >
          EXPLORE
        </h1>
      </div> */}
    </div>
  );
}

export default Availability;
