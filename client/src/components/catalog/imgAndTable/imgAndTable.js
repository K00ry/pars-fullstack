import React from "react";
import TableWithPrice from "./tableWithPrice";
import TableWithKg from "./tableWithKg";
import TableWithModel from "./tableWithModel";


const ImgAndTable = props => {
  let abbas;
  if (props.check === "nj") {
    abbas = <TableWithKg tableSizes={props.tableSizes} t={props.t} />;
  } else if (props.check === "mobleman") {
    abbas = <TableWithModel tableSizes={props.tableSizes} t={props.t} />;
  } else {
    abbas = (
      <TableWithPrice
        check={props.check}
        tableSizes={props.tableSizes}
        t={props.t}
      />
    );
  }

  return (


      <div className="table_wrapper">
        <div className="aks_table">
          <img
            className="aks_preview"
            src={process.env.PUBLIC_URL + props.img}
            alt={props.imageAlt}
          />
        </div>
        {abbas}
      </div>

  );
};

export default ImgAndTable;
