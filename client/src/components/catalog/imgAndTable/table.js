import React from "react";

const Table = props => {
  let correctTable;

    if( props.check === "jadval" ) {
        correctTable =
            <tr>
                {/*<td>{props.t(props.shipping)}</td>*/}
                {/*<td>{props.t(props.price)}</td>*/}
                <td>{props.t(props.type)}</td>
            </tr>;
    } else if( props.check === "blook"){
     correctTable =
        <tr>

          <td>{props.t(props.size)}</td>
          <td>{props.t(props.type)}</td>
        </tr>;
    } else{
        correctTable =
            <tr>
                {/*<td>{props.t(props.shipping)}</td>*/}
                {/*<td>{props.t(props.price)}</td>*/}
                {/*<td>{props.t(props.size)}</td>*/}
                <td>{props.t(props.type)}</td>
            </tr>;

    }

  return correctTable;
};

export default Table;
