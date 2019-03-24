import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Tick } from '../../svg/tick.svg';
import SubItems from './subItems';

const HomeProducts = props => {
  let smallSize =
    process.env.PUBLIC_URL + `img/home-notitle/${props.imgSrc}.png`;
  let upperSize =
    process.env.PUBLIC_URL + `img/home-notitle/desktop/${props.imgSrc}.png`;



  return (
    <div
      className={`product-showcase__items ${props.t('lang-class')} ${props.class} `}>
      <Link className={`product-showcase__linkBlock ${props.floatDirection}`} to={props.address}>
        <img
          className="product-showcase__linkBlock--image"
          src={smallSize}
          srcSet={`${smallSize} 512w,${upperSize} 1024w`}
          sizes="(max-width: 768px) 100vw"
          alt={props.address}
        />

        <div
          className="product-showcase__linkBlock__title ">
          <h2>
            {props.t(props.product)}
          </h2>
          {/*<h3>Types</h3>*/}
          <div className="product-showcase__linkBlock__title__block">
            {props.subGenre.map((item,i) =><SubItems key={i} t={props.t} item={item.type}/>)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeProducts;
