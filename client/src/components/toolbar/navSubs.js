import React from 'react';
import {Link} from "react-router-dom";
import {NavDropdown} from "react-bootstrap";

const NavSubs = props => {
    return (
        <NavDropdown.Item eventKey="4.1"><Link to={props.address} className="dropdown-menu__a">
            {props.t(props.product)}
        </Link></NavDropdown.Item>

    );
};

export default NavSubs;
