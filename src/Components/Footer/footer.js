import React from "react";
import "./footer.css";
import companyLogo from "../../Assets/images/companyLogo.png";

const footer = () => {
  return (
    <div className="footerSection">
      <div className="upperSection">
        <div className="aboutCompany">
          <img
            className="footerLogo"
            src={companyLogo}
            alt="Company Logo"
          ></img>
          <div className="footerText">
            Mulagada,Mindi,Vishakhapatam 530 012,India +91 891 254 8567 |
            contact@alufluoride.com
          </div>
        </div>
        <div className="quickLinksSection">
          <div className="quickLinksHeading"> Quick Links</div>
          <div className="quickLinksOptions">
            <div className="quickLinksLeft">
              <div className="quickLinksText">
                <a href="/">Home</a>
              </div>
              <div className="quickLinksText">
                <a href="/company">Company</a>
              </div>
              <div className="quickLinksText">
                <a href="/investorRelations">Investor Relations</a>
              </div>
            </div>
            <div className="quickLinksRight">
              <div className="quickLinksText">
                <a href="/products">Products</a>
              </div>
              <div className="quickLinksText">
                <a href="/contact/#careers">Career</a>
              </div>
              <div className="quickLinksText">
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerSection">
        <div className="copyrightText">Copyright © All Rights Reserved</div>
        <div className="makerDetails">
          Designed & Developed by Add More Design
        </div>
      </div>
    </div>
  );
};

export default footer;
