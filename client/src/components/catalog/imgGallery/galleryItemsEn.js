import React from 'react';


const GalleryItemsEn = props =>


        <div className="gallery-item__title--en">
            <div className="gallery-item__title_info--en">model: <span>{props.t(props.type)}</span></div>
            <div className="gallery-item__title_info--en">N in square meters: <span>{props.t(props.squareFeet)}</span></div>
            <div className="gallery-item__title_info--en">Gray: <span>{props.t(props.grey)}</span></div>
            <div className="gallery-item__title_info--en">Persian Red: <span>{props.t(props.red)}</span></div>
            <div className="gallery-item__title_info--en">Red & Yellow: <span>{props.t(props.yellow)}</span></div>
            <div className="gallery-item__title_info--en">Shipping Fee: <span>{props.t(props.ship)}</span></div>
        </div>;




export default GalleryItemsEn;