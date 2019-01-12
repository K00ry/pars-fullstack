import React from "react";
import Table from "./table";

const TableWithPrice = props => {
  let correctTableHead;
  props.check === "jadval"
    ? (correctTableHead = (
        <tr>
          <th className="tg-6xid">{props.t("ship")}</th>
          <th className="tg-4s02">{props.t("price")}</th>
          <th>{props.t("sizes")}</th>
        </tr>
      ))
    : (correctTableHead = (
        <tr>
          <th className="tg-6xid">{props.t("ship")}</th>
          <th className="tg-4s02">{props.t("price")}</th>
          <th>{props.t("sizes")}</th>
          <th>{props.t("type")}</th>
        </tr>
      ));

  return (
    <table className={`tg-${props.t("lang-class")}`}>
      <tbody>
        {correctTableHead}
        {props.tableSizes.map((obj, index) => (
          <Table
            check={props.check}
            key={index}
            type={obj.type}
            price={obj.price}
            size={obj.size}
            shipping={obj.shipping}
            kg={obj.kg}
            t={props.t}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableWithPrice;
