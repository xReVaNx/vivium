import React from "react";
import { saveUser } from "../actions/userActions";
import { saveData } from "../actions/dataActions";
import { useDispatch } from "react-redux";

const axios = require("axios").default;

const baseUrl = "http://localhost:3004";

export const getUser = async (inputEmail: string) => {
  await axios
    .get(baseUrl + "/users", {
      params: {
        email: inputEmail,
      },
    })
    .then((res: any) => saveUser(res.data[0].email, res.data[0].password));
};

export const getData = async () => {
  await axios.get(baseUrl + "/employees").then((res: any) => {
    for (let i = 1; i <= res.data.length; i++) {
      saveData(
        res.data[i].id,
        res.data[i].firstName,
        res.data[i].lastName,
        res.data[i].seniority,
        res.data[i].dateOfBirth,
        res.data[i].engagement
      );
    }
  });
};
