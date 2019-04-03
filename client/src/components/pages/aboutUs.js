import React from "react";
import { Parallax } from "react-parallax";
import { Col, Container, Row } from "react-bootstrap";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const AboutUs = props => {
  const small =
    process.env.PUBLIC_URL + "images/about/original/mobile/prod3.jpg";
  const medium =
    process.env.PUBLIC_URL + "images/about/original/mobile/prod3.jpg";
  const large = process.env.PUBLIC_URL + "images/sizeset/new/contact-desk.jpg";
  return (
    <div className="main">
      <Parallax
        bgImage={small}
        bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
        bgImageSizes="(max-width: 768px) 100vw"
        strength={200}
      >
        <div className="parallax-for-contactPage">
          <div
            style={insideStyles}
            className={`pages-header ${props.t("lang-class")}`}
          >
            <div className="pages-header__block">
              <h2 className="pages-header__block--h2">{props.t("about")}</h2>
              {/*<p   className='pages-header__block--p' >{props.t("contactUs-p")}</p>*/}
            </div>
          </div>
        </div>
      </Parallax>
      <div className="container">
        <div className={`history-block ${props.t("lang-class")}`}>
          {/*<h2 className="history-block--title text-center">{props.t("pars-title-footer")}</h2>*/}

          <p className="history-block--p ">
            {props.t("overlay-paragraph")}
          </p>
        </div>

        <Container className="feature_holder">
          <Row>
            <Col xs={12} sm={4} lg={4} className="feature">
              {/*<Thumbnail className="feature__block"  src={process.env.PUBLIC_URL + 'images/features/prod1.jpg'} alt="cover for Full Moon Junkies">*/}
              {/*<h3 data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)" className={`feature__block--title ${props.t("lang-class")}`}>{props.t("prod")}</h3>*/}
              {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
              {/*</Thumbnail>*/}
              <div className="feature__block">
                <img
                  alt="production of pars jadval"
                  className="feature__block--img"
                  src={process.env.PUBLIC_URL + "images/features/prod1.jpg"}
                />
              </div>
              <div className="feature__block">
                <h3
                  data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)"
                  className={`feature__block--title ${props.t("lang-class")}`}
                >
                  {props.t("prod")}
                </h3>
                <h4 className={`feature__block--text ${props.t("lang-class")}`}>
                  {props.t("labratory")}
                </h4>
              </div>
            </Col>

            <Col xs={12} sm={4} lg={4} className="feature">
              {/*<Thumbnail className="feature__block"  src={process.env.PUBLIC_URL + 'images/features/pack1.jpg'} alt="cover for Full Moon Junkies">*/}
              {/*<h3 data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)" className={`feature__block--title ${props.t("lang-class")}`}>{props.t("pack")}</h3>*/}
              {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
              {/*</Thumbnail>*/}
              <div className="feature__block">
                <img
                  alt="packing of pars jadval"
                  className="feature__block--img"
                  src={process.env.PUBLIC_URL + "images/features/pack1.jpg"}
                />
              </div>
              <div className="feature__block">
                <h3
                  data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)"
                  className={`feature__block--title ${props.t("lang-class")}`}
                >
                  {props.t("pack")}
                </h3>
                <h4 className={`feature__block--text ${props.t("lang-class")}`}>
                  {props.t("labratory")}
                </h4>
              </div>
            </Col>
            <Col xs={12} sm={4} lg={4} className="feature">
              {/*<Thumbnail className="feature__block"  src={process.env.PUBLIC_URL + 'images/features/lab1.jpg'} alt="cover for Full Moon Junkies">*/}
              {/*<h3 data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)" className={`feature__block--title ${props.t("lang-class")}`}>{props.t("lab")}</h3>*/}
              {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
              {/*</Thumbnail>*/}
              <div className="feature__block">
                <img
                  alt="lab inside pars jadval"
                  className="feature__block--img"
                  src={process.env.PUBLIC_URL + "images/features/lab1.jpg"}
                />
              </div>
              <div className="feature__block">
                <h3
                  data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut)"
                  className={`feature__block--title ${props.t("lang-class")}`}
                >
                  {props.t("lab")}
                </h3>
                <h4 className={`feature__block--text ${props.t("lang-class")}`}>
                  {props.t("labratory")}
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
