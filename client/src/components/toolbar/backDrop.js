import React from "react";
import { Consumer } from "../context";

const BackDrop = () => {
  return (
    <Consumer>
      {({ actions, openDrawer }) => {
        let back_drop = "backDrop-invisible";
        if (openDrawer) {
          back_drop = "backDrop-visible";
        }
        return (
          <div className={back_drop} onClick={actions.handleOpeningDrawer} />
        );
      }}
    </Consumer>
  );
};

export default BackDrop;
