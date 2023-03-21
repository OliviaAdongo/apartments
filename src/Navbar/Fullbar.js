import './Full.css'
import Navbar from "./Navbar";

function Fullbar() {
  return (
    <div className="container">
      <Navbar />
      <div className='flexer'>
        <a href="/residence">
          <h1 className="menu-opt">
            {" "}
            <h5 className="mini-topic">THE</h5>R E S I D E N C E S
          </h1>
        </a>
        <a href="/amenities">
          <h1 className="menu-opt">
            <h5 className="mini-topic">THE</h5> A M E N I T I E S
          </h1>
        </a>
        <a href="/neighborhood">
          <h1 className="menu-opt">
            <h5 className="mini-topic">THE</h5> N E I G H B O R H O O D
          </h1>
        </a>
        <a href="/availability">
          <h1 className="menu-opt">A V A I L A B I L I T Y</h1>
        </a>
        <h1 className="menu-opt">VIRTUAL TOUR </h1>

        <h1 className="menu-opt">ABOUT US </h1>
        <a href="/contact">
          <h1 className="menu-opt">GET IN TOUCH</h1>
        </a>
      </div>
    </div>
  );
}

export default Fullbar;
