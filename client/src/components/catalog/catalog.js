import React, { Component } from "react";
import CatalogGenre from "./catalogGenre";
import ImgAndTable from "./imgAndTable/imgAndTable";
import ImgGallery from "./imgGallery/imgGallery";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import CatalogGenreDesktop from "./catalogDesktop/catalogGenreDesktop";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";



class Catalog extends Component {
  state = {

    subLinkClass: 1
  };
  // determine which sub category should be viewed

  isActive = index => {
    return this.state.subLinkClass === index;
  };

  setActiveTab = index => {
    this.setState({ subLinkClass: index });
  };
  // get rid of extra space for navigation on header for UI purposes.
  componentDidMount() {
    this.props.mountToggle();

  }
  componentWillUnmount() {
    this.props.mountToggle();
  }
  // getting the correct index of the product from URL of the router before component Mounts so it shows the correct product
  componentWillMount() {
    let rightIndex = this.props.location.pathname.charAt(1);
    this.setState({
      prodData: this.props.mainOfMain[rightIndex],
      ProdSpec: this.props.mainOfMain[rightIndex][1]
    });
  }
  //setting the correct index to view the sub category
  subGenreView = chosen => {
    this.setState({
      ProdSpec: this.state.prodData[chosen]
    });
  };

  render() {
    // Conditionally rendering different components for gallery with a table or simply images

    let galleryType =
      this.state.ProdSpec.genreEn !== "kafpoosh" ? (
        <ImgAndTable
          key={this.state.ProdSpec.genreId}
          img={this.state.ProdSpec.img}
          imageAlt={this.state.ProdSpec.type}
          tableSizes={this.state.ProdSpec.sizes}
          check={this.state.ProdSpec.genreEn}
          t={this.props.t}
          appear={this.state.appear}
        />
      ) : (
        <ImgGallery
          key={this.state.ProdSpec.genreId}
          passData={this.state.ProdSpec.sizes}
          t={this.props.t}
        />
      );



    return (
      <div className={`mainCatalog`}>
        <div className="catalog-body container">
          {/*this component belongs only fo desktop view*/}
          {/*<CatalogGenreDesktop*/}
            {/*mainData={this.props.mainOfMain}*/}
            {/*t={this.props.t}*/}
          {/*/>*/}

          <div className="catalog-function">
            <div
              className={`catalog-header-${this.props.t("lang-class")}`}
              key={this.state.ProdSpec.genreFarsi}>
              <div className="catalog-header__title">
                <h1 className="catalog-header__title_info">
                  {this.props.t(this.state.prodData[0].genreEn)}
                </h1>
              </div>

              <ul className="catalog-header__genres">
                {this.state.prodData.map((arr, index) => (
                  <CatalogGenre
                    key={index}
                    t={this.props.t}
                    productEn={arr.genreEn}
                    productSub={arr.type}
                    productId={arr.genreId}
                    correctGallery={() => this.subGenreView(index)}
                    subtag={this.props.match.url}
                    isActive={this.isActive(index)}
                    onActiveTab={() => this.setActiveTab(index)}
                  />
                ))}
              </ul>
            </div>

            <TransitionGroup component="div" className="wrapper">
              {/*<ReactCSSTransitionGroup*/}
              {/*  transitionName="my-node"*/}
              {/*  transitionEnterTimeout={1}*/}
              {/*  transitionLeaveTimeout={1}*/}
              {/*  component="div"*/}
              {/*>*/}

              <CSSTransition
                  key={this.state.ProdSpec.genreId}
                  // appear={true}
                  timeout={300}
                  classNames="page">
                {galleryType}
              </CSSTransition>
              {/*</ReactCSSTransitionGroup>*/}
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
