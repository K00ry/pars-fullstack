import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavSubs from "./navSubs";

const NavDesk = props => {
  const { i18n } = props;

  let langString;
  let lang = props.i18n.language;
  lang === "en" ? (lang = "fa") : (lang = "en");
  lang === "en" ? (langString = "English") : (langString = "فارسی");
  const toggle = lng => i18n.changeLanguage(lng);
  return (
    <Nav className={`nav-desk container ${props.t("lang-class")}`}>
      <div className="desk-logo">
        <Link to="/" className="toolbar-title">
          <img
            className="toolbar-title__img"
            alt="main logo of the company"
            src={process.env.PUBLIC_URL + "img/main-logo.png"}
          />
        </Link>
      </div>
      {/*<Nav.Item>*/}
      {/*<Link to="/" className="nav-item__a">*/}
      {/*{props.t("sideNav-home")}*/}
      {/*</Link>*/}
      {/*</Nav.Item>*/}
      <NavDropdown  title={props.t("products")} id="nav-dropdown">
        {props.data.map((arr, index) => (
          <NavSubs
            t={props.t}
            key={index}
            address={`/${index}`}
            product={arr[0].genreEn}
          />
        ))}
      </NavDropdown>
      <Nav.Item>
        <Link to="/load-in" className="nav-item__a">
          {props.t("loadIn")}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/lab" className="nav-item__a">
          {props.t("lab")}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-item__a">
          {props.t("about")}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/catalog" className="nav-item__a">
          {props.t("catalog")}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-item__a">
          {props.t("contact")}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <span
          className={`lang-select--${props.t("lang-class")}`}
          onClick={() => toggle(lang)}
        >
          {langString}
        </span>
      </Nav.Item>
    </Nav>
  );
};

export default NavDesk;
