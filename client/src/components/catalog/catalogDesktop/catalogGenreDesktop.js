import React from 'react';
// import { Parallax } from 'react-parallax';
import HomeGenres from './homeGenres';


const CatalogGenreDesktop = props => {
    // const small = process.env.PUBLIC_URL + 'images/sizeset/new/intro-mob.jpg';
    console.log(props.mainData);
  return (
      <div className="desktop-sideGenre">

                  <div className="home-genres" >
                      <div className={`home-genres-title ${props.t("lang-class")}`}>
                          <h2>{props.t("products")}</h2>
                      </div>
                      {props.mainData.map((arr, index) => (
                          <HomeGenres
                              key={index}
                              address={`/${index}`}
                              product={arr[0].genreEn}
                              img={arr[0].img}
                              alt={arr[0].genreEn}
                              t={props.t}
                          />
                      ))}
                  </div>
              </div>

  );

};

export default CatalogGenreDesktop;