import React from 'react'
import {ReactComponent as Tick} from "../../svg/tick.svg";

const SubItems = props =>{

    return(
        <div className="product-showcase__linkBlock__title__block--row">
        <h3>{props.t(props.item)}</h3>
        <Tick className="tick"/>
        </div>
    )
};

export default SubItems;