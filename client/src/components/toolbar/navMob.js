import React from "react";
import { Link } from "react-router-dom";

const NavMob = props => {
  return (
    <nav>
      <div className={` header-div ${props.t("lang-class")}`}>
        <div className="btn" onClick={props.click}>
          <div id="menuToggle">
            <span />
            <span />
            <span />
          </div>
        </div>
        <Link to="/" className="toolbar-title">
          <img
            className="toolbar-title__img"
            alt="main logo of the company"
            src={process.env.PUBLIC_URL + "img/main-logo.png"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavMob;
