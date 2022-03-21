import React from "react";
import "../scss/homePage.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f38e64",
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-container">
        <Navbar />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
