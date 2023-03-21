import "./Home.css";

function Home() {
  return (
    <div className="flexbox-container">
    <div className="header-section">
NAVBAR
    </div>
      <div className="logo-section-landing">
        <img
          src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
          alt="logo"
          className="home-logo"
        />
      </div>
      <div className="home-content">
        <p className="lore">A L U X U R I O U S</p>
        <p className="lore">S A N C T U A R Y</p>
        <p className="home-nest">nested in unparalleled tranquility</p>
      </div>
    </div>
  );
}

export default Home;
