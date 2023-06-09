import { FaAngleDown } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import "./Reside.css";
 
function RecidenceHome() {
  let navigate = useNavigate()
  return (
    <div> 
    <Navbar/>
      <div className="flexbox-container-residencehome">
        <div className="flexbox-item-residencehome-1">
          <div className="rheading">
          <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="rwhite-logo" alt="logo"/>
 
         <h6 className="trre">T H E </h6>
            <h1 className="tir"> R E S I D E N C E S</h1>
          
          </div>
          <div className="body">
          <h1  className="luxury" >L  U X U R Y</h1>
          <h1 className="luxury u" >U N I T S</h1>


          </div>
          <div className="footer"> 
          <h1 className="care" >CAREFULLY </h1>
            <h1 className="care" >CONSIDERED &</h1>

            <h1 className="care" >METICULOUSLY </h1>

            <h1 className="care" >DESIGNED</h1>

          
            <p className="paragraph-bottom">
              With uninterrupted views from each appartments, 'The Saruni' at
              Riverside Drive, is a modern interpretation of contemporary luxury
              specifically designed to enhance your living exparience
            </p>
          </div>
        </div>

        
        <div className="flexbox-item-residencehome-2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/residenceluxury.jpg"
            alt="residence"
            className="living-area"
          />
          
        </div>
        <h6 onClick={() => {
            navigate("/livingroom");
          }}
       className='more'>
            EXPLORE THE RESIDENCES<FaAngleDown />
          </h6>
      </div>
      
    </div>
  );
}

export default RecidenceHome;
