import React from "react";
import "../scss/navbar.scss";
import { Button } from "@mui/material";
import { removeUser } from "../actions/userActions";
import { authLogout } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const logout = async () => {
    await removeUser();
    await authLogout();
    navigate("/login");
  };

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navbar">
      <div className="navbar-section1"></div>
      <div className="navbar-section2">
        <Button
          onClick={handleClick}
          className="logout-button"
          variant="contained"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
