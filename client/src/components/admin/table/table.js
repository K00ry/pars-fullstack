import React from "react";

const Table = props => {
  let correctTable;

  props.check === "jadval"
    ? (correctTable = (
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.type)}</td>
        </tr>
      ))
    : (correctTable = (
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.size)}</td>
          <td>{props.t(props.type)}</td>
        </tr>
      ));

  return correctTable;
};

export default Table;
