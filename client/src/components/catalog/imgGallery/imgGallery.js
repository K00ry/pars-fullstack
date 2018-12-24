import React from 'react';
import GalleryItems from './galleryItems';

const ImgGallery = props => {

    // let jaber



  return (

      <div className="group" style={{}}>
        <div className="gallery-wrapper">
          {props.passData.map((arr, index) => (
            <GalleryItems
              key={index}
              img={arr.img}
              type={arr.type}
              type_en={arr.type_en}
              squareFeet={arr.inSquarefeet}
              squareFeet_en={arr.inSquarefeet_en}
              grey={arr.toosi}
              red={arr.red}
              yellow={arr.yellowmix}
              ship={arr.shipping}
              t={props.t}
            />
          ))}
        </div>
      </div>

  );
};

export default ImgGallery;
