import React from "react";
import { ReactComponent as Tick } from "../../svg/tick.svg";

const SubItems = props => {
  return (
    <div className="title__block__row">
      <div className="title__block__row--item">
        <h3>{props.t(props.item)}</h3>
      </div>
      <div className="title__block__row--item">
        <Tick className="tick" />
      </div>
    </div>
  );
};

export default SubItems;
