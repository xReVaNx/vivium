import React, { Component } from "react";
import "../scss/signInPage.scss";
import LoginBox from "../components/LoginBox";

class signInPage extends Component {
  render() {
    return (
      <div className="login-main-container">
        <div className="bg-image"></div>
        <LoginBox />
      </div>
    );
  }
}

export default signInPage;
