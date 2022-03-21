import React, { useEffect } from "react";
import "../scss/dashboard.scss";
import { getData } from "../api/requests";
import store from "../store/store";

const Dashboard = () => {
  useEffect(() => {
    console.log("componentDidMount");
    getData();
    console.log(store.getState().dataReducer);
  });

  return <div className="dashboard"></div>;
};

export default Dashboard;
