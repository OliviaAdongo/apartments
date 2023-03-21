import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ExploreResidence() {
    let  navigate =  useNavigate()
  return (
    <div>
        <h1
          onClick={() => {
            navigate("/livingroom");
          }}
       className='next' >

          EXPLORE THE RESIDENCES
        </h1>
        <h1 className="downangle"><FaAngleDown/></h1>
    </div>
  )
}

export default ExploreResidence