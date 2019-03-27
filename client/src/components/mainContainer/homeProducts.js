import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubItems from "./subItems";
import ScrollTrigger from "react-scroll-trigger";

class HomeProducts extends Component {
  state = {
    visible: false
  };
  onEnterViewport = () => {
    this.setState({
      visible: true
    });
  };

  onExitViewport = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    // const {visible} = this.state;
    let smallSize =
      process.env.PUBLIC_URL + `img/home-notitle/${this.props.imgSrc}.png`;
    let upperSize =
      process.env.PUBLIC_URL +
      `img/home-notitle/desktop/${this.props.imgSrc}.png`;
    let lIn;
    let rIn;
    if (this.props.floatDirection === "f-left") {
      lIn = "fromLeftIn";
      rIn = "fromRightOut";
    } else if (this.props.floatDirection === "f-right") {
      lIn = "fromRightIn";
      rIn = "fromLeftOut";
    }

    return (
      <div
        className={`product-showcase__items ${this.props.t("lang-class")} ${
          this.props.class
        } `}
      >
        <Link
          className={`product-showcase__linkBlock ${this.props.floatDirection}`}
          to={this.props.address}
        >
          <ScrollTrigger
            throttleScroll={400}
            onEnter={this.onEnterViewport}
            onExit={this.onExitViewport}
          >
            <img
              className={`product-showcase__linkBlock--image ${
                this.state.visible ? lIn : rIn
              }`}
              src={smallSize}
              srcSet={`${smallSize} 512w,${upperSize} 1024w`}
              sizes="(max-width: 768px) 100vw"
              alt={this.props.address}
            />
          </ScrollTrigger>

          <div className="product-showcase__linkBlock__title ">
            <h2>{this.props.t(this.props.product)}</h2>
            {/*<h3>Types</h3>*/}
            <div className="product-showcase__linkBlock__title__block">
              {this.props.subGenre.map((item, i) => (
                <SubItems key={i} t={this.props.t} item={item.type} />
              ))}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default HomeProducts;
