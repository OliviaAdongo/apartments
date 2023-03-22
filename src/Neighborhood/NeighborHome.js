import "./Neigh.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function NeighborHome() {
  let navigate = useNavigate()
  return (
    <div className="parent">
      <Navbar />
      <div className="flexbox-container-neighhome">
      <div className="flexbox-item-residencehome-1">
          <div className="jirheading">
          <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="rwhite-logo" alt="logo"/>
  
         <h6 className="trre">T H E </h6>
            <h1 className="tir"> N E I G H B O R H O O D</h1>
          
          </div>
          <div className="bodyy">
          <h1  className="jirani" >AN EXCLUSIVE</h1>
          <h1 className="jirani u" >ADDRESS</h1>


          </div>
          <div className="footer"> 
          

          
          <p className="coddler">
              Coddled by nature on the edge of Nairobi River, 'The Saruni', is a
              tranquil refuge located on Nairobi's coveted Riverside Drivee; A
              secluded preference for embasies, diplomatic organizations and
              professional companies.
            </p>
            <p className="coddler bot">
              Riverside drove is a premium expression of privacy, prestige and
              convenience.
            </p>
          </div>
        </div>


      
        <div className="flexbox-item-neighhome2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/neigbourhood.jpg"
            alt="residence"
            className="neighborhood-image"
          />
        </div>
      </div>
      <h1
          onClick={() => {
            navigate("/map");
          }}
       className='next' >

          EXPLORE MAP <FaAngleDown />
        </h1>
        
    </div>
  );
}

export default NeighborHome;
