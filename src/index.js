import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import store from "./app/store";

createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </Router>
);
