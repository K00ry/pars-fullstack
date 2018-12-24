import React from 'react';
// import {NavLink} from 'react-router-dom';

const CatalogGenre = props =>



    // ${props.t("lang-class")}

        <li
            className={props.isActive ? `catalog-header__genres_navigation active`: `catalog-header__genres_navigation`}
            onClick={ props.onActiveTab }
        >
            <div className={`catalog-header__genres_navigation--btn-${props.t("lang-class")} ${props.isActive ? 'active': ''}
            `}
                onClick={props.correctGallery}
            >{props.t(props.productSub)}</div>
        </li>;






export default CatalogGenre;