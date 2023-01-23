import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ title, url, dropdownItems }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <Link to={url} className={isActive && "accordion-active"}>
          <div>{title}</div>
        </Link>
        <div>
          {isActive ? (
            <i class="fa fa-angle-up"></i>
          ) : (
            <i class="fa fa-angle-down"></i>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {dropdownItems.map(({ title, url }) => (
            <Link to={url} className="navbar-item-title">
              <span>{title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
