import React from "react";
import Table from './table';


const TableWithPrice = props =>(
    <table className={`tg-${props.t("lang-class")}`}>
        <tbody>
        <tr>
            <th className="tg-6xid">{props.t("ship")}</th>
            <th className="tg-4s02">{props.t("price")}</th>
            <th>{props.t("sizes")}</th>
        </tr>
        {
            props.tableSizes.map((obj,index)=>
                <Table
                    key={index}
                    type={obj.type}
                    price={obj.price}
                    shipping={obj.shipping}
                    kg={obj.kg}
                    t={props.t}
                />)

        }

        </tbody>
    </table>
);

export default TableWithPrice;

