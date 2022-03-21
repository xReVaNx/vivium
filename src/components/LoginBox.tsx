import React from "react";
import Logo from "../images/vivium.png";
import "../scss/loginBox.scss";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../Validations/UserValidation";
import { getUser } from "../api/requests";
import store from "../store/store";
import { authLogin } from "../actions/authActions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f38e64",
    },
  },
});

type Inputs = {
  email: string;
  password: string;
};

export default function LoginBox() {
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login(data);
  };

  const login = async (inputData: any) => {
    await getUser(inputData.email);
    if (
      inputData.email == store.getState().userReducer.email &&
      inputData.password == store.getState().userReducer.password
    ) {
      authLogin();
      navigate("/");
    } else {
      console.log("Niepoprawne dane");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(userSchema) });

  return (
    <ThemeProvider theme={theme}>
      <div className="login-container">
        <div className="logo-container">
          <img src={Logo} alt="Vivium logo" />
        </div>
        <div className="input-box">
          <h1>Log in</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="email"
              id="email-input"
              variant="standard"
              size="small"
              margin="normal"
              style={{ width: "50%" }}
              color="primary"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <TextField
              type="password"
              label="password"
              id="password-input"
              variant="standard"
              size="small"
              margin="normal"
              style={{ width: "50%" }}
              color="primary"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <Button type="submit" variant="contained">
              Log in
            </Button>
          </form>
          <div className="option-box">
            <a href="#">Forgot password</a>
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
