import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ExploreMap() {
    let navigate = useNavigate()
  return (
    <div className='explorer'>
        <h1
          onClick={() => {
            navigate("/map");
          }}
       className='next' >

          EXPLORE MAP
        </h1>
        <h1 className="downangle"><FaAngleDown /></h1>
    </div>
  )
}

export default ExploreMap