import React from "react";
import { Consumer } from "../context";
// import { Parallax } from "react-parallax";
import img from "../../img/khanabig.png";
import HomeProducts from "./homeProducts";


//
// const insideStyles = {
//   background: "transparent",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };


const MainContainer = props => (
  <Consumer>
    {({ mainData, CatalogSpec }) => {
      // const small = process.env.PUBLIC_URL + "images/sizeset/new/intro-mob.jpg";
      // const medium =
      //   process.env.PUBLIC_URL + "images/sizeset/new/intro-tab.jpg";
      // const large = process.env.PUBLIC_URL + "images/sizeset/new/intro-tab.jpg";
      const small_logo =
        process.env.PUBLIC_URL + "images/sizeset/new/intro-mob.png";
      const medium_logo =
        process.env.PUBLIC_URL + "images/sizeset/new/intro-tab.png";
      const large_logo =
        process.env.PUBLIC_URL + "images/sizeset/new/intro-desk2.png";

      return (
        <div key={CatalogSpec.type} className="main">


            <div className="intro">
              <div
                className="intro__block container">
                <img
                  className="intro__block--img"
                  src={small_logo}
                  srcSet={`${small_logo} 768w,${medium_logo} 1280w, ${large_logo} 1440w`}
                  alt="Pars Jadval logo"

                />
                <h2 className={`intro__block--h2 ${props.t("lang-class")}`}>
                  {props.t("concrete-precast")}
                </h2>
              </div>
            </div>




          <div className=" container product-showcase">
            {mainData.map((arr, i) => {
              let floatClass;
              if (i === 0 || i === 3 || i === 5 || i === 6) {
                floatClass = "f-right";
              } else {
                floatClass = "f-left";
              }
              return (
                <HomeProducts
                  key={i}
                  class={i}
                  floatDirection={floatClass}
                  address={`/${i}`}
                  imgSrc={arr[0].genreEn}
                  product={arr[0].genreEn}
                  subGenre={arr}
                  t={props.t}
                />
              );
            })}
          </div>
          {/*<Parallax strength={280}>*/}
            {/*<div className="parallax-my-custom-2">*/}
              <div
                // style={insideStyles}
                className={`container overlaySection ${props.t("lang-class")}`}
              >
                {/*<img className="overlaySection__img" src={process.env.PUBLIC_URL + 'img/kamyon.jpg'}/>*/}
                <div
                  className="overlaySection__card"
                  data-scroll="centerVertical,toggle(.scaleDownIn, .scaleDownOut)"
                >
                  <h2 className="overlaySection__card--title">
                    {props.t("pars-title-footer")}
                  </h2>
                  <p className="overlaySection__card--p">
                    {props.t("overlay-paragraph")}
                  </p>
                </div>
              </div>
            {/*</div>*/}
          {/*</Parallax>*/}
        </div>
      );
    }}
  </Consumer>
);

export default MainContainer;
