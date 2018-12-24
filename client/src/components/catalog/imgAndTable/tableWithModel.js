import React from "react";
import TableModel from './tableModel';


const TableWithModel = props =>(

    <table className={`tg-${props.t("lang-class")}`}>
        <tbody>
        <tr>

            <th className="stubborn" colSpan="3">{props.t("model")}</th>

        </tr>
        <tr>
        {
            props.tableSizes.map((obj,index)=>
                <TableModel
                    key={index}
                    type={obj.type}
                    t={props.t}
                />)

        }
        </tr>

        </tbody>
    </table>
);

export default TableWithModel;