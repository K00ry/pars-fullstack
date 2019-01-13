import React from "react";

const Table = props => {
  // if the product has _id of mongo data base it assigns a remove button from the database for the user
  let removeButton;

  if (props.id) {
    removeButton = (
      <td>
        <button onClick={props.deleteProductFromDb}>remove</button>
      </td>
    );
  }

  let correctTable;

  props.check === "jadval"
    ? (correctTable = (
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.type)}</td>
          {removeButton}
        </tr>
      ))
    : (correctTable = (
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.size)}</td>
          <td>{props.t(props.type)}</td>
          {removeButton}
        </tr>
      ));

  return correctTable;
};

export default Table;
