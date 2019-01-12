import React from "react";
import Table from "./table";

const TableWithPrice = props => (
  <table className={`tg-${props.t("lang-class")}`}>
    <tbody>
      <tr>
        <th className="tg-6xid">{props.t("ship")}</th>
        <th className="tg-4s02">{props.t("price")}</th>
        <th>{props.t("sizes")}</th>
      </tr>
      {props.fromServer.map(obj =>
        obj.sizes.map((kbj, index) => (
          <Table
            key={index}
            type={kbj.type}
            price={kbj.price}
            shipping={kbj.shipping}
            t={props.t}
          />
        ))
      )}
    </tbody>
  </table>
);

export default TableWithPrice;
