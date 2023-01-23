import React from "react";
import contact from "../../Assets/images/contact.png";
import mail from "../../Assets/images/mail.png";
import location from "../../Assets/images/location.png";
import "./Header.css";

const App = () => {
  const content = (
    <div className="headerContent">
      <div className="headerItem">
        <img className="headerImage" src={contact} alt="contactlogo" />
        <div className="imageText">+91 891 254 8587</div>
      </div>
      <div className="headerItem">
        <img className="headerImage" src={mail} alt="maillogo" />
        <div className="imageText">contact@alufluoride.com</div>
      </div>
      <div className="headerItem">
        <img className="headerImage" src={location} alt="locationlogo" />
        <div className="imageText">Vishakhapatam, India</div>
      </div>
    </div>
  );

  return (
    <div className="header">
      <marquee
        className="marquee mobileHeader"
        direction="left"
        scrollamount="8"
      >
        {content}
      </marquee>

      <div className="desktopHeader">{content}</div>
    </div>
  );
};

export default App;
