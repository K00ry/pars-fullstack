import React, { Component } from "react";
import { Parallax } from "react-parallax";

class ContactPage extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgYvfqyEbqFHQAJWhda5Anx3IFdjszJac&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.360279, lng: 51.627192 },
      zoom: 17
    });

    new window.google.maps.Marker({
      position: { lat: 35.360279, lng: 51.627192 },
      map: map,
      title: "Hello World!"
    });
  };
  render() {
    const insideStyles = {
      background: "transparent",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    const small = process.env.PUBLIC_URL + "images/sizeset/new/contact-mob.jpg";
    const medium =
      process.env.PUBLIC_URL + "images/sizeset/new/contact-tab.jpg";
    const large =
      process.env.PUBLIC_URL + "images/sizeset/new/contact-desk.jpg";

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
              className={`pages-header ${this.props.t("lang-class")}`}
            >
              <div className="pages-header__block">
                <h2 className="pages-header__block--h2">
                  {this.props.t("contactUs")}
                </h2>
                {/*<p className="pages-header__block--p">*/}
                  {/*{this.props.t("contactUs-p")}*/}
                {/*</p>*/}
              </div>
            </div>
          </div>
        </Parallax>

        <div className="container">
          <div className={`history-block ${this.props.t("lang-class")}`}>
            {/*<h2 className="history-block--title text-center">{props.t("pars-title-footer")}</h2>*/}
            <p className="history-block--p ">
              {this.props.t("contactUs-p")}
            </p>
          </div>
        </div>

        <div id="map" className="container"/>
      </div>
    );
  }
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default ContactPage;
