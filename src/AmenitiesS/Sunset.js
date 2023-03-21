import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Sunset() {
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
        <p className="sunner">Wind down to the sunset on the west</p>
          
        </div>
        <div className="sparagraph-bottom"> 
        <h4 className="eastward">T H E </h4>
            <h4 className="eastward">W E S T W A R D</h4>
            <h4 className="eastward"> G A R D E N</h4>
            <p className="east-gard">
              is located on the 12th and 13th floor facing the plush Lavington
              area and its environs
            </p>


        </div>
      </div>
      <div className="flexbox-item-livingroom-2">
        <img
          src="http://www.thesaruni.com/TheSaruniImages/sundownledt.jpg"
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
          src="http://www.thesaruni.com/TheSaruniImages/sundownright.jpg"
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
        navigate("/poolgymcourtyard");
      }}
      className="next"
    >
      EXTRAS <FaAngleDown />
    </h1>

  </div>
  )
}

export default Sunset