import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';

import CatalogGenre from './catalogGenre';
import ImgAndTable from './imgAndTable/imgAndTable';
import ImgGallery from './imgGallery/imgGallery';
import CatalogGenreDesktop from './catalogDesktop/catalogGenreDesktop';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Catalog extends Component {
  state = {
    subLinkClass: 1,
  };

  isActive = index => {
    return this.state.subLinkClass === index;
  };

  setActiveTab = index => {
    this.setState({ subLinkClass: index });
  };

  componentDidMount(){
   this.props.mountToggle();
  }

    componentWillUnmount(){
        this.props.mountToggle();
    }

  componentWillMount() {

    let rightIndex = this.props.location.pathname.charAt(1);

    this.setState({

      prodData: this.props.mainOfMain[rightIndex],
      ProdSpec: this.props.mainOfMain[rightIndex][1],
    });
  }

  subGenreView = chosen => {
    this.setState({
      ProdSpec: this.state.prodData[chosen],
    });
  };

  render() {
    let galleryType =
      this.state.ProdSpec.genreEn !== 'kafpoosh' ? (
        <ImgAndTable
          key={this.state.ProdSpec.genreId}
          img={this.state.ProdSpec.img}
          imageAlt={this.state.ProdSpec.type}
          tableSizes={this.state.ProdSpec.sizes}
          check={this.state.ProdSpec.genreEn}
          t={this.props.t}
        />
      ) : (
        <ImgGallery
          key={this.state.ProdSpec.genreId}
          passData={this.state.ProdSpec.sizes}
          t={this.props.t}
        />
      );

    return (
      <div className="main">
        <div className="catalog-body">
          <CatalogGenreDesktop
            mainData={this.props.mainOfMain}
            t={this.props.t}
          />

          <div className="catalog-function">
            <div
              className={`catalog-header-${this.props.t('lang-class')}`}
              key={this.state.ProdSpec.genreFarsi}
            >
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

            <div className="wrapper">
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={10}
                component="div"
              >
                {galleryType}
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
