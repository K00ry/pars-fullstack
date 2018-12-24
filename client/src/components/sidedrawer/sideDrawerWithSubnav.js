import React from 'react';
import logo from "../../logo.svg";
import Sublinks from './subLinks';


const SideDrawerWithSubnav = props =>{
    let subNavOpen = 'arrow-style';
let subOpenDisplay = 'nav';
if (props.navOpen) {
    subNavOpen = 'arrow-style turn';
    subOpenDisplay = 'nav expand'
}


return(
    <li className="sidenav-li-drop">
        <div className="nav-link-style"
             onClick={props.toggle}>
            <div className="nav-link-style__arrow">
                <img className={subNavOpen} src={logo} alt="Arrow" />
            </div>
            <div className="nav-link-style__title">{props.t("products")}</div>
        </div>
        <div className={subOpenDisplay}>
            <ul className="sideNav-sub">
                {props.dataPass.map((arr, index) => (
                    <Sublinks
                        t={props.t}
                        key={index}
                        address={`/${index}`}
                        product={arr[0].genreEn}
                        // correctCatalogClick={() => props.correctCatalog(index)}
                        closeNav={props.closeSub}
                    />
                ))}
            </ul>
        </div>
    </li>
    )
};






export default SideDrawerWithSubnav;