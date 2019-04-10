import React from 'react';
import { Parallax } from 'react-parallax';
import { ReactComponent as FileLogo } from '../../svg/file.svg';


const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const catalogDownLoad = props =>{
    const small = process.env.PUBLIC_URL + "images/catalog/catalog-page-mob.jpg";
    const medium = process.env.PUBLIC_URL + "images/catalog/catalog-page-mob.jpg";
    const large = process.env.PUBLIC_URL + "images/catalog/catalog-page-desk.jpg";
    return(
        <div className="main">
            <Parallax bgImage={small}
                      bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
                      bgImageSizes="(max-width: 768px) 100vw" strength={200}>
                <div className="parallax-for-contactPage">
                    <div style={insideStyles} className={`pages-header ${props.t("lang-class")}`}>
                        <div className='pages-header__block'>
                            <h2   className='pages-header__block--h2'>{props.t("catalog")}</h2>
                            {/*<p   className='pages-header__block--p' >{props.t("contactUs-p")}</p>*/}
                        </div>
                    </div>

                </div>
            </Parallax>


            {/*<div className="container">*/}
                {/*<div className={`history-block ${props.t("lang-class")}`}>*/}
                    {/*/!*<h2 className="history-block--title text-center">{props.t("pars-title-footer")}</h2>*!/*/}
                    {/*<p className='pages-header__block--p' >{props.t("contactUs-p")}</p>*/}
                {/*</div>*/}
            {/*</div>*/}

            <div className="download-links container">


                <div className="download-links__link">
                    <FileLogo className="file-svg"/>
                    <a
                        className={props.t('lang-class')}
                    href={process.env.PUBLIC_URL + '/pdf/catalog-all.pdf'}
                    target="_blank"
                    rel="noopener noreferrer">{props.t('download-all')}</a>
                </div>

            </div>

        </div>




    )

};

export default catalogDownLoad;