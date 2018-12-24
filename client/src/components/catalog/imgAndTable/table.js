import React from 'react';


const Table = props =>





    <tr>
        <td>{props.t(props.shipping)}</td>
        <td>{props.t(props.price)}</td>
        <td>{props.t(props.type)}</td>
    </tr>;






export default Table;