import React, { Component } from 'react';
import {  Route, Switch} from 'react-router-dom';
import { translate} from "react-i18next";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollTrigger from 'scrolltrigger-classes';
import {Col, Grid, Row} from "react-bootstrap";
import data from './data';
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sidedrawer/sidedrawer';
import MainContainer from './components/mainContainer/mainContainer';
import Catalog from './components/catalog/catalog';
import ContactPage from  './components/contact/contactPage';
import BackDrop from "./components/toolbar/backDrop";
import LoadIn from './components/pages/loadIn';
import CatalogDownLoad from './components/pages/catalogDownLoad';
import Laboratory from './components/pages/laboratory';
import AboutUs from './components/pages/aboutUs';
import Contact from './components/contact/contact';






class App extends Component {

  state = {
    openDrawer : false,
      mainData: data,
      CatalogData: data[0],
      CatalogSpec:data[0][0],
      catalogMount:false
  };
  openDrawer = () => {
        this.setState((prevState) => {
            return  {openDrawer: !prevState.openDrawer}
        })

    };
    catalogState = () => {
        this.setState((prevState) => {
            return  {catalogMount: !prevState.catalogMount}
        })

    };
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function(){
            let trigger = new ScrollTrigger();
            console.log(trigger);
        });
        fetch('/users').then(res=>res.json()).then(response => {
            // this.setState({
            //     kososher:response,
            // });
            console.log(response);
        })

    }


  render() {

      const { t, i18n } = this.props;


      let catalogRouts =  this.state.mainData.map((arr,i)=>(
          <Route exact key={i} path={`/${i}`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                               mountToggle={this.catalogState}

                                                                               t={t}
                                                                               {...routerProps}/>} />
      ));


    return (

        <Route render={({ location }) => (

      <div className="App">


          <Toolbar openDrawer={this.openDrawer} mountState={this.state.catalogMount} t={t} i18n={i18n}/>
          <BackDrop openDrawer={this.openDrawer} show={this.state.openDrawer} />
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
                      t={this.props.t}
          />



          <TransitionGroup component="main">
              <CSSTransition
                  timeout={500}
                  key={location.key}
                  classNames='slide'>

          <Switch location={location}>
              <Route  exact path="/" render={()=>
                  <MainContainer dataArray={this.state.mainData}
                                 productSpec={this.state.CatalogSpec}
                                 t={this.props.t}/>
              } />

              <Route  exact path="/load-in"
                      render={()=> <LoadIn t={this.props.t}/>} />
              <Route  exact path="/catalog"
                      render={()=> <CatalogDownLoad t={this.props.t}/>} />
              <Route  exact path="/lab"
                      render={()=> <Laboratory t={this.props.t}/>} />
              <Route  exact path="/About"
                      render={()=> <AboutUs t={this.props.t}/>} />
              <Route  exact path="/contact"
                      render={()=> <ContactPage t={this.props.t}/>} />

              {catalogRouts}

          </Switch>
              </CSSTransition>
          </TransitionGroup>





          <Contact t={this.props.t}/>
          <footer className={`footer ${this.props.t("lang-class")}`}>
              <Grid fluid>
              <Row >
                  <Col >
                      <h1>©{t("pars-title-footer")}</h1>
                  </Col>
              </Row>
              </Grid>
          </footer>

      </div>
        )}/>

    );
  }
}

export default translate("translations")(App);
