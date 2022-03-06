import React from "react";
import ReactDOM from "react-dom";
import SignInPage from "./pages/signInPage";
import "./scss/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
