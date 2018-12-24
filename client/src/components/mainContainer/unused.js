import HomeGenres from "../catalog/catalogDesktop/homeGenres";
import React from "react";
const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const Unused = props =>{
    return (
        <div className="home-genres" style={insideStyles}>
            <div className="home-genres-title">
                <h2>{props.t("products")}</h2>
            </div>
            {props.dataArray.map((arr, index) => (
                <HomeGenres
                    key={index}
                    address={`/${index}`}
                    product={arr[0].genreEn}
                    t={props.t}
                />
            ))}
        </div>

    );


};
export default Unused;

