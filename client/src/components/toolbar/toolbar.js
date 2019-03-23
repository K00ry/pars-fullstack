import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { Consumer } from "../context";

const Toolbar = props => {
  const { i18n } = props;

  return (
    <Consumer>
      {({ catalogMount, actions }) => {
        let langString;
        let lang = props.i18n.language;
        lang === "en" ? (lang = "fa") : (lang = "en");
        lang === "en" ? (langString = "English") : (langString = "فارسی");
        const toggle = lng => i18n.changeLanguage(lng);
        let position = catalogMount ? "inCatalog" : " ";

        return (
          <header className={position}>
            <Headroom disableInlineStyles className="container">
              <div className="lang-select">
                <span
                  className={`lang-select--${props.t("lang-class")}`}
                  onClick={() => toggle(lang)}
                >
                  {langString}
                </span>
              </div>
              <nav>
                <div className={` header-div ${props.t("lang-class")}`}>
                  <div className="btn" onClick={actions.handleOpeningDrawer}>
                    <div id="menuToggle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <Link to="/" className="toolbar-title">
                    <img
                      className="toolbar-title__img"
                      alt="main logo of the company"
                      src={process.env.PUBLIC_URL + "img/main-logo.png"}
                    />
                  </Link>
                </div>
              </nav>
            </Headroom>
          </header>
        );
      }}
    </Consumer>
  );
};

export default Toolbar;
