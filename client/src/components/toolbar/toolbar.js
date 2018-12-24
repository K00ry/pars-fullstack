import React from 'react';
// import {Navbar} from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
// import {  Trans } from "react-i18next";



const Toolbar = props => {

    const { i18n } = props;

    let langString;
    let lang = props.i18n.language;
    lang === "en" ? lang = "fa" : lang = "en";
    lang === "en" ? langString = "English" : langString = "فارسی";
    const toggle = lng => i18n.changeLanguage(lng);
    let position = props.mountState ? "inCatalog" : " ";



  return  (
      <header className={position}>

    <Headroom

        disableInlineStyles
       >

        <div className="lang-select">
            <span className={`lang-select--${props.t("lang-class")}`} onClick={() => toggle(lang)}>{langString}</span>
        </div>


    <nav>
      <div className={`header-div ${props.t("lang-class")}`}>
          <div className="btn">
        {/*<span  id="btn" onClick={props.openDrawer}>*/}
          {/*☰*/}
        {/*</span>*/}
              <div id="menuToggle" onClick={props.openDrawer}>


              <span>

                </span>
                  <span>

                </span>
                  <span>

                </span>
              </div>
          </div>


        <Link  to="/" className="toolbar-title">
            <img className="toolbar-title__img" alt="main logo of the company" src={process.env.PUBLIC_URL + 'img/main-logo.png'}/>
          {/*<h1 className="toolbar-title__h1">*/}
              {/*<Trans>*/}
                  {/*Pars<b> Jadval</b>*/}
              {/*</Trans>*/}
          {/*</h1>*/}
        </Link>
      </div>

    </nav>
    </Headroom>
  </header>

)};

export default Toolbar;
