import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import DarkTheme from "./components/NavBar/DarkTheme";
import { ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./components/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={DarkTheme}>
    <React.StrictMode>
      <AuthProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </AuthProvider>
    </React.StrictMode>
  </ThemeProvider>
);
