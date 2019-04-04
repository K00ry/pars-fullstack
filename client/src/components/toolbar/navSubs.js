import React from "react";
import { Link } from "react-router-dom";


const NavSubs = props => {
  return (
    <div className="dropdown-item">
      <Link to={props.address} className="dropdown-menu__a">
        {props.t(props.product)}
      </Link>
    </div>
  );
};

export default NavSubs;
