import Navbar from "../Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flexbox-container-contact">
        <div className="flexbox-item-contact1">
          <img
            src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
            alt="logo"
            className="home-logo"
          /><h4 className="word">THE SARUNI</h4>
          <div className="oppa">
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              PROPERTY DEVELOPER
            </p>
            <p className="coddler">
              Riverside Strand Property Development Company Ltd.
            </p>
          </div>
          <div className="hyung">
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              CONTACTS:
            </p>
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              Riverside Drive
            </p>
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              T: 759 278 564
            </p>
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              {" "}
              745 466 634
            </p>
            <p
              className="coddler"
              style={{
                fontWeight: "bold",
              }}
            >
              E: info@thesaruni.com
            </p>
            <a href="www.thesaruni.com">www.thesaruni.com</a>
          </div>
          <div className="suga">
            <p className="coddler">
              The information contained in this brochure is soley for general
              marketing purposes and should not be relied upon as being
              completely accurate. No legal relationship or advice is implied.
              Artistic impressionsor immage renders contained in this brrochure
              are forillustrative purposes only. No representations or
              warranties are implied by Riveerside Strand Property Development
              Company Limited ["Riverside Strand"]. Riverside Strand shall not
              be liable for any loss or damage howsoever arising from reliance
              upon the information contained in this brochure. Purchases are
              subject to contractual terms.
            </p>
          </div>
        </div>
        <div className="flexbox-item-contact2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/home.jpg"
            alt="land"
            className="neighborhood-profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
