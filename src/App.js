import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amenities from "./AmenitiesS/Amenities";
import AmenitiesHome from "./AmenitiesS/AmenitiesHome";
import GeneralAmenities from "./AmenitiesS/GeneralAmenities";
import Sunrise from "./AmenitiesS/Sunrise";
import Sunset from "./AmenitiesS/Sunset";
import Home from "./Home/Home";
import Rousel from "./Home/Rousel";
import Fullbar from "./Navbar/Fullbar";
import Navbar from "./Navbar/Navbar";
import NeighborHome from "./Neighborhood/NeighborHome";
import Neighborhood from "./Neighborhood/Neighborhood";
import NeighMap from "./Neighborhood/NeighMap";
import Bedroom from "./Residence/Bedroom";
import Kitchen from "./Residence/Kitchen";
import Living from "./Residence/Living";
import RecidenceHome from "./Residence/RecidenceHome";
import Residence from "./Residence/Residence";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/menu" element={<Fullbar />} />

        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Rousel />} />

        <Route path="/residence" element={<Residence />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/neighborhood" element={<Neighborhood />} />
        {/* rooms */}
        <Route path="/livingroom" element={<Living />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/residencehome" element={<RecidenceHome />} />

        {/* amenities */}
        <Route path="/amenitieshome" element={<AmenitiesHome />} />
        <Route path="/poolgymcourtyard" element={<GeneralAmenities />} />
        <Route path="/sunrise" element={<Sunrise />} />
        <Route path="/sunset" element={<Sunset />} />



        {/* neighborhood */}
        <Route path="/neighborhoodhome" element={<NeighborHome />} />
        <Route path="/map" element={<NeighMap />} />
      </Routes>
    </Router>
  );
}

export default App;
