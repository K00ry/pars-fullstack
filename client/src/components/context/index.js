import React, { Component } from "react";
// import ScrollTrigger from "scrolltrigger-classes";


const ParsJadvalContext = React.createContext();

export class Provider extends Component {
  state = {
    openDrawer: false,
    mainData: [],
    CatalogData: [],
    CatalogSpec: [],
    catalogMount: false,
    productSubNavOpen: false
  };

  // toggling the state of Side Drawer
  openDrawer = () => {
    this.setState(prevState => {
      return { openDrawer: !prevState.openDrawer };
    });
  };
  catalogState = () => {
    this.setState(prevState => {
      return { catalogMount: !prevState.catalogMount };
    });
  };

  /// for opening(or sliding down) the sub nav in SideDrawer

  subNavToggle = () => {
    this.setState(prevState => {
      return { productSubNavOpen: !prevState.productSubNavOpen };
    });
  };

  // to fetch the main data from Express
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(response => {
        this.setState({
          mainData: response,
          CatalogData: response[0],
          CatalogSpec: response[0][0]
        });
      });
    // document.addEventListener("DOMContentLoaded", function() {
    //   new ScrollTrigger(
    //       // {centerHorizontal:true}
    //   );
    // });
  }

  render() {
    return (
      <ParsJadvalContext.Provider
        value={{
          openDrawer: this.state.openDrawer,
          mainData: this.state.mainData,
          CatalogData: this.state.CatalogData,
          CatalogSpec: this.state.CatalogSpec,
          catalogMount: this.state.catalogMount,
          slidDownNav: this.state.productSubNavOpen,

          actions: {
            handleOpeningDrawer: this.openDrawer,
            handleCatalogState: this.catalogState,
            handleSlideDownSubNav: this.subNavToggle,

            t: this.props.t,
            i18n: this.props.i18n
          }
        }}
      >
        {this.props.children}
      </ParsJadvalContext.Provider>
    );
  }
}

export const Consumer = ParsJadvalContext.Consumer;
