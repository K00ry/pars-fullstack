import React from "react";
// import { Link } from "react-router-dom";
import {  NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const NavSubs = props => {
  return (

    <LinkContainer to={props.address}  className="dropdown-item">
      <NavDropdown.Item className="dropdown-menu__a">
        {props.t(props.product)}
    </NavDropdown.Item>
      </LinkContainer>

  );
};

export default NavSubs;
