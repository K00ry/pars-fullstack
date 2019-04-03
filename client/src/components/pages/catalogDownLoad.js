import React from 'react';
import { Parallax } from 'react-parallax';


const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const catalogDownLoad = props =>{
    const small = process.env.PUBLIC_URL + 'images/sizeset/new/contact-mob.jpg';
    const medium = process.env.PUBLIC_URL + 'images/sizeset/new/contact-tab.jpg';
    const large = process.env.PUBLIC_URL + 'images/sizeset/new/contact-desk.jpg';
    return(
        <div className="main">
            <Parallax bgImage={small}
                      bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
                      bgImageSizes="(max-width: 768px) 100vw" strength={200}>
                <div className="parallax-for-contactPage">
                    <div style={insideStyles} className={`pages-header ${props.t("lang-class")}`}>
                        <div className='pages-header__block'>
                            <h2   className='pages-header__block--h2'>{props.t("contactUs")}</h2>
                            <p   className='pages-header__block--p' >{props.t("contactUs-p")}</p>
                        </div>
                    </div>


                </div>
            </Parallax>
        </div>


    )

};

export default catalogDownLoad;