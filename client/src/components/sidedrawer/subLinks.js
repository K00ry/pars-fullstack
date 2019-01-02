import React from 'react';
import { Link } from 'react-router-dom';
import {Consumer} from "../context";

const Sublinks = props =>

    <Consumer>{
        ({actions})=>
            <li
            className="sideNav-sub__li"
            onClick={actions.handleOpeningDrawer}>
            <Link  to={props.address} className="sideNav-sub__li--link">{props.t(props.product)}</Link>
        </li>

    }</Consumer>;




export default Sublinks;
