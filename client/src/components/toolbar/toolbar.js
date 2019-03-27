import React from "react";
import Headroom from "react-headroom";
// import { Link } from "react-router-dom";
import NavMob from "./navMob";
import NavDesk from "./navDesk";
import { Consumer } from "../context";
import Sizes from "react-sizes";

const Toolbar = props => {
  const { i18n } = props;

  return (
    <Consumer>
      {({ catalogMount, actions, mainData }) => {
        // let langString;
        // let lang = props.i18n.language;
        // lang === "en" ? (lang = "fa") : (lang = "en");
        // lang === "en" ? (langString = "English") : (langString = "فارسی");
        // const toggle = lng => i18n.changeLanguage(lng);
        let position = catalogMount ? "inCatalog" : " ";

        return (
          <header className={position}>
            <Headroom disableInlineStyles className="container-fluid">
              {/*<div className="lang-select">*/}
              {/*<span*/}
              {/*className={`lang-select--${props.t("lang-class")}`}*/}
              {/*onClick={() => toggle(lang)}*/}
              {/*>*/}
              {/*{langString}*/}
              {/*</span>*/}
              {/*</div>*/}
              {props.isMobile ? (
                <NavMob t={props.t} click={actions.handleOpeningDrawer} />
              ) : (
                <NavDesk t={props.t} data={mainData} i18n={i18n} />
              )}
            </Headroom>
          </header>
        );
      }}
    </Consumer>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 800
});
export default Sizes(mapSizesToProps)(Toolbar);
