import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import SideDrawerWithSubnav from "./sideDrawerWithSubnav";



class SideDrawer extends Component {
  state = {
    productSubNavOpen: false,
  };

  subNavToggle = () => {
    this.setState(prevState => {
      return { productSubNavOpen: !prevState.productSubNavOpen };
    });
  };

  render() {
    let sideDraw = 'sidenav';

    if (this.props.show) {
      sideDraw = 'sidenav nav-open';

    }


    return (
      <div id="mySidenav" className={`${this.props.t("lang-class")} ${sideDraw}`}>
        <div onClick={this.props.closeDrawer} className="closebtn">
          ×
        </div>
        <ul className={`sideNav-title ${this.props.t("lang-class")}`}>
          <li className="sidenav-home" onClick={this.props.closeDrawer}>
            <Link to="/" className="sidenav-home-btn">
                {this.props.t("sideNav-home")}
            </Link>
          </li>
          <SideDrawerWithSubnav
              navOpen={this.state.productSubNavOpen}
              toggle={this.subNavToggle}
              t={this.props.t}
              dataPass={this.props.dataMain}
              closeSub={this.props.closeDrawer}
          />


            <li className="sidenav-noSub">
                <Link to="/load-in" className="sidenav-noSub__Link" onClick={this.props.closeDrawer}>
                    <div className="sidenav-noSub__Link--font">{this.props.t("loadIn")}</div>
                </Link>
            </li>
            <li className="sidenav-noSub">
                <Link to="/lab" className="sidenav-noSub__Link" onClick={this.props.closeDrawer}>
                    <div className="sidenav-noSub__Link--font">{this.props.t("lab")}</div>
                </Link>
            </li>
            <li className="sidenav-noSub">
                <Link to="/about" className="sidenav-noSub__Link" onClick={this.props.closeDrawer}>
                    <div className="sidenav-noSub__Link--font">{this.props.t("about")}</div>
                </Link>
            </li>
            <li className="sidenav-noSub">
                <Link to="/catalog" className="sidenav-noSub__Link" onClick={this.props.closeDrawer}>
                    <div className="sidenav-noSub__Link--font">{this.props.t("catalog")}</div>
                </Link>
            </li>
            <li className="sidenav-noSub">
                <Link to="/contact" className="sidenav-noSub__Link" onClick={this.props.closeDrawer}>
                    <div className="sidenav-noSub__Link--font">{this.props.t("contact")}</div>
                </Link>
            </li>




        </ul>
      </div>
    );
  }
}

export default SideDrawer;
