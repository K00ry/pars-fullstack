import React from "react";
import Headroom from "react-headroom";
import NavMob from "./navMob";
import NavDesk from "./navDesk";
import { Consumer } from "../context";
import Sizes from "react-sizes";

const Toolbar = props => {
  const { i18n } = props;

  return (
    <Consumer>
      {({ catalogMount, actions, mainData }) => {

        let position = catalogMount ? "inCatalog" : " ";

        return (
          <header
              className={position}
          >
            <Headroom disableInlineStyles className="container-fluid">
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
  isMobile: width < 900
});
export default Sizes(mapSizesToProps)(Toolbar);
