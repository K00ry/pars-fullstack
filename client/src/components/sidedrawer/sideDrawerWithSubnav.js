import React from 'react';
import logo from "../../logo.svg";
import {Consumer} from "../context";
import Sublinks from './subLinks';


const SideDrawerWithSubnav = props =>
    <Consumer>
        {({actions,slidDownNav,mainData})=>{
            let subNavOpen = 'arrow-style';
            let subOpenDisplay = 'nav';
            if (slidDownNav) {
                subNavOpen = 'arrow-style turn';
                subOpenDisplay = 'nav expand'
            }
            return(
                <li className="sidenav-li-drop">
                    <div className="nav-link-style"
                         onClick={actions.handleSlideDownSubNav}>
                        <div className="nav-link-style__arrow">
                            <img className={subNavOpen} src={logo} alt="Arrow" />
                        </div>
                        <div className="nav-link-style__title">{props.t("products")}</div>
                    </div>
                    <div className={subOpenDisplay}>
                        <ul className="sideNav-sub">
                            {mainData.map((arr, index) => (
                                <Sublinks
                                    t={props.t}
                                    key={index}
                                    address={`/${index}`}
                                    product={arr[0].genreEn}
                                />
                            ))}
                        </ul>
                    </div>
                </li>

            );
        }}
    </Consumer>;






export default SideDrawerWithSubnav;