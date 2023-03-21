import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect } from "react";
import Residence from "../Residence/Residence";
import Neighborhood from "../Neighborhood/Neighborhood";
import Amenities from "../AmenitiesS/Amenities";
 
  
const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in";
  let slideStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
    transform: `rotate(0)`,
    position:
      state.previousItem === state.selectedItem ? "relative" : "absolute",
    inset: "0 0 0 0",
    zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
    opacity: state.previousItem === state.selectedItem ? "1" : "0",
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: "relative",
      zIndex: 2,
      filter: `blur(0)`,
    },
    prevStyle: {
      ...slideStyle,
      transformOrigin: " 0 100%",
      transform: `rotate(${
        state.previousItem > state.selectedItem ? "-45deg" : "45deg"
      })`,
      opacity: "0",
      filter: `blur( ${
        state.previousItem === state.selectedItem ? "0px" : "5px"
      })`,
    },
  };
};

function Rousel() {

    useEffect(() => {
      const getNumbers =  sessionStorage.getItem("numberReloaded");

      if(typeof(getNumbers)  === 'undefined' 
      || getNumbers === null  || parseInt(getNumbers)  === 1){
        window.location.reload()
        sessionStorage.setItem("numberReloaded",2)
      }
    
   
    }, [])
    
  
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      interval={4000}
      transitionTime={2000}
      animationHandler={rotateAnimationHandler}
      swipeable={false}
    >
      <Neighborhood />
      <Amenities />
      <Residence />
    </Carousel>
  );
}

export default Rousel;
