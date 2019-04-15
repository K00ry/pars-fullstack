import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import SideDrawerWithSubnav from "./sideDrawerWithSubnav";

class SideDrawer extends Component {
  render() {
    return (
      <Consumer>
        {({ actions, openDrawer }) => {
          const { i18n } = this.props;
          let sideDraw = "sidenav";
          if (openDrawer) {
            sideDraw = "sidenav nav-open";
          }
          let langString;
          let lang = this.props.i18n.language;
          lang === "en" ? (lang = "fa") : (lang = "en");
          lang === "en" ? (langString = "English") : (langString = "فارسی");
          const toggle = lng => i18n.changeLanguage(lng);

          return (
            <div
              id="mySidenav"
              className={`${this.props.t("lang-class")} ${sideDraw}`}
            >
              <span
                  className={`lang-select--${this.props.t("lang-class")}`}
                  onClick={() => toggle(lang)}
              >
                {langString}
              </span>
              <div onClick={actions.handleOpeningDrawer} className="closebtn">
                ×
              </div>
              <ul className={`sideNav-title ${this.props.t("lang-class")}`}>
                <li
                  className="sidenav-home"
                  onClick={actions.handleOpeningDrawer}
                >
                  <Link to="/" className="sidenav-home-btn">
                    {this.props.t("sideNav-home")}
                  </Link>
                </li>
                <SideDrawerWithSubnav t={this.props.t} />

                <li className="sidenav-noSub">
                  <Link
                    to="/load-in"
                    className="sidenav-noSub__Link"
                    onClick={actions.handleOpeningDrawer}
                  >
                    <div className="sidenav-noSub__Link--font">
                      {this.props.t("loadIn")}
                    </div>
                  </Link>
                </li>
                <li className="sidenav-noSub">
                  <Link
                    to="/lab"
                    className="sidenav-noSub__Link"
                    onClick={actions.handleOpeningDrawer}
                  >
                    <div className="sidenav-noSub__Link--font">
                      {this.props.t("lab")}
                    </div>
                  </Link>
                </li>
                <li className="sidenav-noSub">
                  <Link
                    to="/about"
                    className="sidenav-noSub__Link"
                    onClick={actions.handleOpeningDrawer}
                  >
                    <div className="sidenav-noSub__Link--font">
                      {this.props.t("about")}
                    </div>
                  </Link>
                </li>
                <li className="sidenav-noSub">
                  <Link
                    to="/catalog"
                    className="sidenav-noSub__Link"
                    onClick={actions.handleOpeningDrawer}
                  >
                    <div className="sidenav-noSub__Link--font">
                      {this.props.t("catalog")}
                    </div>
                  </Link>
                </li>
                <li className="sidenav-noSub">
                  <Link
                    to="/contact"
                    className="sidenav-noSub__Link"
                    onClick={actions.handleOpeningDrawer}
                  >
                    <div className="sidenav-noSub__Link--font">
                      {this.props.t("contact")}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SideDrawer;
