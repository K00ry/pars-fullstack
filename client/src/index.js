import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import App from "./App";
import ScrollToTop from "./components/scrollToTop";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "./components/context";
// import {Provider} from "react-redux";
// import {createStore } from 'redux';
// import reducer from "./components/store/reducers";

// const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <I18nextProvider i18n={i18n}>
        <Provider>
          <App />
        </Provider>
      </I18nextProvider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

