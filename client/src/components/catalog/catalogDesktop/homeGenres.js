import React from 'react';
import { Link } from 'react-router-dom';

const HomeGenres = props =>


        <Link className="home-genre__item" to={props.address}>
            <img className="home-genre__item--img" src={process.env.PUBLIC_URL + props.img} alt={props.alt}/>
            <div className={`home-genres__item--title ${props.t("lang-class")}`}>{props.t(props.product)}</div>
        </Link>;




export default HomeGenres;
