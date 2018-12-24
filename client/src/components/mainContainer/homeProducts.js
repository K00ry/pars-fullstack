import React from 'react';

import { Link } from 'react-router-dom';

const HomeProducts = props => {
  let smallSize =
    process.env.PUBLIC_URL + `img/home-notitle/${props.imgSrc}.png`;
  let upperSize =
    process.env.PUBLIC_URL + `img/home-notitle/desktop/${props.imgSrc}.png`;

  return (
    <div
      className={`product-showcase__items ${props.t('lang-class')} ${
        props.class
      } `}
    >
      <Link className="product-showcase__linkBlock" to={props.address}>
        <img
          className="product-showcase__linkBlock--image"
          src={smallSize}
          srcSet={`${smallSize} 512w,${upperSize} 1024w`}
          sizes="(max-width: 768px) 100vw"
          alt={props.address}
        />

        <div
          className={`product-showcase__linkBlock--title ${
            props.floatDirection
          }`}
        >
          <span
          // data-scroll="centerVertical,toggle(.scaleUpIn, .scaleUpOut)"
          >
            {props.t(props.product)}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HomeProducts;
