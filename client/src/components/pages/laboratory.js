import React from 'react';
import { Parallax } from 'react-parallax';

const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const Laboratory = props =>{
    const small = process.env.PUBLIC_URL + 'images/laboratory/original/mobile/lab1.jpg';
    const medium = process.env.PUBLIC_URL + 'images/laboratory/original/mobile/lab1.jpg';
    const large = process.env.PUBLIC_URL + 'images/sizeset/new/contact-desk.jpg';
    return(
        <div className="main">
            <Parallax bgImage={small}
                      bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
                      bgImageSizes="(max-width: 768px) 100vw" strength={200}>
                <div className="parallax-for-contactPage">
                    <div style={insideStyles} className={`contact-us ${props.t("lang-class")}`}>
                        <div className='contact-us__block'>
                            <h2   className='contact-us__block--h2'>{props.t("lab")}</h2>
                            <p   className='contact-us__block--p' >{props.t("labratory")}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className='gallery-lab'>
                <div className="gallery-lab__block" >

                    <img  alt="production of pars jadval" className="gallery-lab__block--img" src={process.env.PUBLIC_URL + 'images/laboratory/lab1.jpg'}/>
                </div>
                <div className="gallery-lab__block" >

                    <img  alt="production of pars jadval" className="gallery-lab__block--img" src={process.env.PUBLIC_URL + 'images/laboratory/lab2.jpg'}/>
                </div>
                <div className="gallery-lab__block" >
                    <img  alt="production of pars jadval" className="gallery-lab__block--img" src={process.env.PUBLIC_URL + 'images/laboratory/lab3.jpg'}/>
                </div>
                <div className="gallery-lab__block" >
                    <img  alt="production of pars jadval" className="gallery-lab__block--img" src={process.env.PUBLIC_URL + 'images/laboratory/lab4.jpg'}/>
                </div>
            </div>
        </div>


    )

};

export default Laboratory;