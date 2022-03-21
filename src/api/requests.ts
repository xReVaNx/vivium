import React from "react";
import { saveUser } from "../actions/userActions";

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
