import React from 'react';
import { Parallax } from 'react-parallax';


const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const LoadIn = props =>{
    const small = process.env.PUBLIC_URL + 'images/load-in/original/mobile/load-2.jpg';
    const medium = process.env.PUBLIC_URL + 'images/load-in/original/load-2-1.jpg';
    const large = process.env.PUBLIC_URL + 'images/load-in/original/load-2-1.jpg';
    return(
        <div className="main">
            <Parallax bgImage={small}
                      bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
                      bgImageSizes="(max-width: 768px) 100vw" strength={200}>
                <div className="parallax-for-contactPage">
                    <div style={insideStyles} className={`pages-header ${props.t("lang-class")}`}>
                        <div className='pages-header__block'>
                            <h2   className='pages-header__block--h2'>{props.t("loadIn")}</h2>
                            {/*<p   className='pages-header__block--p' >{props.t("loadIn-p")}</p>*/}
                        </div>
                    </div>


                </div>
            </Parallax>



            <div className="container">
                <div className={`history-block ${props.t("lang-class")}`}>
                    {/*<h2 className="history-block--title text-center">{props.t("pars-title-footer")}</h2>*/}
                    <p className="history-block--p ">
                        {props.t("packing")}
                    </p>
                </div>
            </div>
            <div className='gallery-loadIn container'>
                <div className="gallery-loadIn__block" >

                    <img  alt="production of pars jadval" className="gallery-loadIn__block--img" src={process.env.PUBLIC_URL + 'images/load-in/load-1.jpg'}/>
                </div>
                <div className="gallery-loadIn__block" >

                    <img  alt="production of pars jadval" className="gallery-loadIn__block--img" src={process.env.PUBLIC_URL + 'images/load-in/load-2.jpg'}/>
                </div>
                <div className="gallery-loadIn__block" >

                    <img  alt="production of pars jadval" className="gallery-loadIn__block--img" src={process.env.PUBLIC_URL + 'images/load-in/load-3.jpg'}/>
                </div>
                <div className="gallery-loadIn__block" >

                    <img  alt="production of pars jadval" className="gallery-loadIn__block--img" src={process.env.PUBLIC_URL + 'images/load-in/load-4.jpg'}/>
                </div>
            </div>
        </div>


    )

};

export default LoadIn;