import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppThemeProvider from "./Themes/AppThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppThemeProvider>
    <App />
  </AppThemeProvider>

  // </React.StrictMode>
);
