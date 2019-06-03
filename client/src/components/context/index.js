import React, { Component } from "react";
import axios from 'axios';



const ParsJadvalContext = React.createContext();

export class Provider extends Component {
  state = {
    openDrawer: false,
    mainData: [],
    CatalogData: [],
    CatalogSpec: [],
    catalogMount: false,
    productSubNavOpen: false,
    token: localStorage.getItem("token") || "",
      serverMessage: "",
  };

  // toggling the state of Side Drawer
  openDrawer = () => {
    this.setState(prevState => {
      return { openDrawer: !prevState.openDrawer };
    });
  };
  catalogState = () => {
    this.setState(prevState => {
      return { catalogMount: !prevState.catalogMount };
    });
  };

  /// for opening(or sliding down) the sub nav in SideDrawer

  subNavToggle = () => {
    this.setState(prevState => {
      return { productSubNavOpen: !prevState.productSubNavOpen };
    });
  };

    login = (userInfo) => {

        return axios.post("/login", userInfo)
            .then(response => {


                if(response.data.status === 200){
                const { token } = response.data;
                localStorage.setItem("token", token);
                this.setState({
                    token
                });
                }
                this.setState({
                    serverMessage: "Sorry! your not an Admin."
                });

                console.log(response.data);
                return response.data;
            })
    };

  // to fetch the main data from Express
  componentDidMount() {
    fetch("/main")
      .then(res => res.json())
      .then(response => {
          // console.log(response);
        this.setState({
          mainData: response,
          CatalogData: response[0],
          CatalogSpec: response[0][0]
        });
      });
  }

  render() {

    return (
      <ParsJadvalContext.Provider
        value={{
          openDrawer: this.state.openDrawer,
          mainData: this.state.mainData,
          CatalogData: this.state.CatalogData,
          CatalogSpec: this.state.CatalogSpec,
          catalogMount: this.state.catalogMount,
          slidDownNav: this.state.productSubNavOpen,
            token:this.state.token,
            serverMessage:this.state.serverMessage,

          actions: {
            handleOpeningDrawer: this.openDrawer,
            handleCatalogState: this.catalogState,
            handleSlideDownSubNav: this.subNavToggle,
            loginPass: this.login,
            t: this.props.t,
            i18n: this.props.i18n
          }
        }}
      >
        {this.props.children}
      </ParsJadvalContext.Provider>
    );
  }
}

export const Consumer = ParsJadvalContext.Consumer;

 export const withContext = Component => {
    return props => {
        return (
            <ParsJadvalContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </ParsJadvalContext.Consumer>
        )
    }
};

 // export default withRouter(withContext)
