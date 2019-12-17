import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import { theme } from "./styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./styles/defaults";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
