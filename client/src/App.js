import React from "react";
import { Route, Switch } from "react-router-dom";
import { translate } from "react-i18next";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import { Consumer } from "./components/context";
import Toolbar from "./components/toolbar/toolbar";
import Admin from "./components/admin/admin";
import SideDrawer from "./components/sidedrawer/sidedrawer";
import MainContainer from "./components/mainContainer/mainContainer";
import Catalog from "./components/catalog/catalog";
import ContactPage from "./components/pages/contactPage";
import BackDrop from "./components/toolbar/backDrop";
import LoadIn from "./components/pages/loadIn";
import CatalogDownLoad from "./components/pages/catalogDownLoad";
import Laboratory from "./components/pages/laboratory";
import AboutUs from "./components/pages/aboutUs";
import Contact from "./components/contact/contact";

const App = props => (
  <Consumer>
    {({ actions, mainData }) => {
      const { t, i18n } = props;

      let catalogRouts = mainData.map((arr, i) => (
        <Route
          exact
          key={i}
          path={`/${i}`}
          render={routerProps => (
            <Catalog
              mainOfMain={mainData}
              mountToggle={actions.handleCatalogState}
              t={t}
              {...routerProps}
            />
          )}
        />
      ));

      return (
        <Route
          render={({ location }) => (
            <div className="App">
              <Toolbar t={t} i18n={i18n} />
              <BackDrop />
              <SideDrawer t={props.t} i18n={i18n} />

              <TransitionGroup component="main">
                <CSSTransition
                  timeout={300}
                  key={location.key}
                  classNames="page"
                >
                  <Switch location={location}>

                    {/*<Route render={() => <MainContainer t={props.t} />}/>*/}
                    <Route
                      exact
                      path="/"
                      render={() => <MainContainer t={props.t} />}
                    />
                    <Route
                      exact
                      path="/admin"
                      render={() => <Admin t={props.t} />}
                    />

                    <Route
                      exact
                      path="/load-in"
                      render={() => <LoadIn t={props.t} />}
                    />
                    <Route
                      exact
                      path="/catalog"
                      render={() => <CatalogDownLoad t={props.t} />}
                    />
                    <Route
                      exact
                      path="/lab"
                      render={() => <Laboratory t={props.t} />}
                    />
                    <Route
                      exact
                      path="/About"
                      render={() => <AboutUs t={props.t} />}
                    />
                    <Route
                      exact
                      path="/contact"
                      render={() => <ContactPage t={props.t} />}
                    />

                    {catalogRouts}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>

              <Contact t={props.t} />
              <footer className={`footer  ${props.t("lang-class")}`}>
                <div className="container">
                  <h1>©{t("pars-title-footer")}</h1>
                </div>
              </footer>
            </div>
          )}
        />
      );
    }}
  </Consumer>
);

export default translate("translations")(App);
