import React from "react";
import SignInPage from "./pages/signInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
