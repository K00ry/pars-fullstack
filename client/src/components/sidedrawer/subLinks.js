import React from 'react';
import { Link } from 'react-router-dom';
// import data from '../../data';

const Sublinks = props =>



        <li
            className="sideNav-sub__li"
            onClick={()=>{
                // props.correctCatalogClick();
            props.closeNav()} }
        >
            <Link  to={props.address} className="sideNav-sub__li--link">{props.t(props.product)}</Link>
        </li>;





//   return (<ul className="sideNav-sub">
//       {jaber}
//       </ul>);
// };

export default Sublinks;
