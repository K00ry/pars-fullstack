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

 if( props.check === "jadval"){
     correctTable =
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.type)}</td>
          {removeButton}
        </tr>;


 } else if(props.check === "blook"){
   correctTable =
        <tr>
          <td>{props.t(props.shipping)}</td>
          <td>{props.t(props.price)}</td>
          <td>{props.t(props.size)}</td>
          <td>{props.t(props.type)}</td>
          {removeButton}
        </tr>;

     } else if (props.check === "kafpoosh"){
     correctTable =
         <tr>
             <td>{props.t(props.type)}</td>
             <td>{props.t(props.square)}</td>
             <td>{props.img}</td>
             {removeButton}
         </tr>;
        }   else if (props.check === "dal" || props.check === "mozayik" || props.check === "kaval"){
            correctTable =
             <tr>
                 <td>{props.t(props.type)}</td>

                 {removeButton}
             </tr>;
 }


  return correctTable;
};

export default Table;
