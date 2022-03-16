import React from "react";
import SignInPage from "./pages/signInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
