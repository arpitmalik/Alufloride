import React, { useState } from "react";
import "./Navbar.css";
import companyLogo from "../../Assets/images/companyLogo.png";
import downArrow from "../../Assets/images/arrow-down-circle.png";
import searchIcon from "../../Assets/images/searchicon.png";
import { Link } from "react-router-dom";
import Accordion from "../accordion";

const navbarItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
    dropdownItems: [
      { title: "Milestones", url: "/about/#milestones" },
      { title: "Team", url: "/about/#team" },
      { title: "Customers", url: "/about/#customers" },
      { title: "Quality", url: "/about/#quality" },
      { title: "Environment", url: "/about/#environment" },
      { title: "CSR", url: "/about/#csr" },
    ],
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Investor Relations",
    url: "/investorRelations",
    dropdownItems: [
      {
        title: "Quarterly Reports",
        url: "/investorRelations/#quarterlyReports",
      },
      { title: "Annual Reports", url: "/investorRelations/#annualReports" },
      {
        title: "Corporate Governance",
        url: "/investorRelations/#corporateGovernance",
      },
      {
        title: "Board Meeting Intimation",
        url: "/investorRelations/#boardMeeting",
      },
      {
        title: "Shareholding Pattern",
        url: "/investorRelations/#shareHoldingPattern",
      },
    ],
  },
  {
    title: "Latest News",
    url: "/news",
  },
  {
    title: "Contact Us",
    url: "/contact",
    dropdownItems: [
      { title: "General Enquiry", url: "/contact/#generalEnquiry" },
      { title: "Sales", url: "/contact/#sales" },
      { title: "Investors", url: "/contact/#investors" },
      { title: "Careers", url: "/contact/#careers" },
    ],
  },
];

const Navbar = (props) => {
  const [navbarOpen, setOpenState] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toggleNavbar = () => {
    setOpenState((prevState) => !prevState);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar-section-desktop">
        {/* Hero Image */}
        <img className="hero-image" src={props.url} alt="Hero" />

        {/* Navbar  */}
        <div className="navbar-row">
          <div className="company-logo">
            <img src={companyLogo} alt="Company Logo" />
          </div>
          <div className="navbar-items">
            {navbarItems.map(({ title, url, dropdownItems }) => (
              <Link to={url} className="navbar-item-title">
                <div className="dropdown-item">
                  <span>{title}</span>
                  {(dropdownItems || [])?.length > 0 && (
                    <>
                      <i class="fa fa-angle-up"></i>
                      <i class="fa fa-angle-down"></i>
                    </>
                  )}
                  {dropdownItems?.length > 0 && (
                    <div className="dropdown-content">
                      {dropdownItems.map(({ title, url }) => (
                        <Link to={url} className="navbar-item-title">
                          <span>{title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
            <img className="search-icon" src={searchIcon} alt="Search"></img>
          </div>
        </div>

        {/* Scroll To Bottom */}
        <img
          src={downArrow}
          className="scroll-to-bottom-btn"
          onClick={() => scrollToBottom()}
          alt="Scroll to bottom"
        />
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-section-mobile">
        {/* Hero Image */}
        <img className="hero-image" src={props.url} alt="Hero" />

        {/* Navbar  */}
        <div className="navbar-row">
          {navbarOpen && (
            <div className="navbar-content-mobile">
              {navbarItems.map(({ title, url, dropdownItems }) => (
                <>
                  {dropdownItems?.length > 0 ? (
                    <div className="accordion">
                      <Accordion
                        title={title}
                        url={url}
                        dropdownItems={dropdownItems}
                      />
                    </div>
                  ) : (
                    <div>
                      <Link to={url} className="navbar-item-title">
                        <div className="dropdown-item">
                          <span>{title}</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}

          <div onClick={toggleNavbar} className="menuIcon">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="company-logo">
            <img src={companyLogo} alt="Company Logo" />
          </div>

          <img className="search-icon" src={searchIcon} alt="Search"></img>
        </div>

        {/* Scroll To Bottom */}
        <img
          src={downArrow}
          className="scroll-to-bottom-btn"
          onClick={() => scrollToBottom()}
          alt="Scroll to bottom"
        />
      </div>
    </>
  );
};

export default Navbar;
