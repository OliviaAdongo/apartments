import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import "./Navbar.css";
 
function Navbar() {
  let navigate = useNavigate();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="child-nav">
      <header className="headerr">
        <img
          className="navbary-logo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        /> 
        <h4 className="th">THE SARUNI</h4>
        <nav ref={navRef} className="mtoto">
          <div className="menu">
            <a href="/availability" className="menutext">
              A V A I L A B I L I T Y
            </a>
            <a href="/contact" className="menutext">
              G E T{" "}
              <a href="/contact" className="touch">
                I N
              </a>{" "}
              T O U C H
            </a>
          </div>

          <a href="/menu" className="barss">
            <FaBars />
          </a>

          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
