import React from "react";
import TableKg from './tableKg';


const TableWithKg = props =>(
    <table className={`tg-${props.t("lang-class")}`}>
        <tbody>
        <tr>
            <th className="tg-4s02">{props.t("kg")}</th>
            <th>{props.t("sizes")}</th>
        </tr>
        {
            props.tableSizes.map((obj,index)=>

                <TableKg
                    key={index}
                    type={obj.type}
                    kg={obj.kg}
                    t={props.t}
                />)

        }

        </tbody>
    </table>
);

export default TableWithKg;