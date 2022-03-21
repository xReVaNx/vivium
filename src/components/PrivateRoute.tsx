import React from "react";
import { Navigate } from "react-router";
import store from "../store/store";
import HomePage from "../pages/HomePage";

const PrivateRoute = () => {
  console.log(store.getState());
  return store.getState().authReducer.isAuth ? (
    <HomePage />
  ) : (
    <Navigate replace to="/login" />
  );
};

export default PrivateRoute;
