import React from 'react';


const GalleryItemsFa = props =>


    <div className="gallery-item__title--fa">
        <div className="gallery-item__title_info--fa"><span>{props.t(props.type)}</span> : مدل</div>
        <div className="gallery-item__title_info--fa"> تعداد در مترمربع :  <span>{props.t(props.squareFeet)}</span></div>
        <div className="gallery-item__title_info--fa"><span>{props.t(props.grey)}</span> : طوسی</div>
        <div className="gallery-item__title_info--fa"><span>{props.t(props.red)}</span> : (قرمز (ایرانی</div>
        <div className="gallery-item__title_info--fa"><span>{props.t(props.yellow)}</span> : (زرد و قرمز (خارجی</div>
        <div className="gallery-item__title_info--fa"><span>{props.t(props.ship)}</span> : هزینه بارگیری</div>
    </div>;




export default GalleryItemsFa;