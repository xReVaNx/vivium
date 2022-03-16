import React from "react";
import Logo from "../images/vivium.png";
import "../scss/loginBox.scss";
import { createTheme, ThemeProvider, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../Validations/UserValidation";

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

const onSubmit: SubmitHandler<Inputs> = (data) => {
  console.log(data);
};

export default function LoginBox() {
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
