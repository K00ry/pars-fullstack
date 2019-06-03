import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import App from "./App";
import ScrollToTop from "./components/scrollToTop";
import { Provider } from "./components/context";
import './i18n';


ReactDOM.render(
  <Router>
    <ScrollToTop>
        <Provider>
          <App />
        </Provider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

