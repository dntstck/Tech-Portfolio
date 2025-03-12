// MyProfile
// MyProfile component
// Dru Delarosa | @dntstck

import React, { useContext, useState } from "react";
import "./Login.css";
import loginLogo from "/login.svg";
import loginSuccess from "/login-success.svg";
import { AuthContext } from "./AuthContext";
import NavBar from "../routes/NavBar";

function MyProfile() {
  const { isLoggedIn, username } = useContext(AuthContext);
  const [setIsLoggingIn] = useState(false);

    setIsLoggingIn(true);

    setTimeout(() => {
      login(user);
      setIsLoggingIn(false);
    }, 800);
  
  return (
    <>
      {isLoggedIn ? (
        <div className="center-app">
          <NavBar />
        <div className="login-card">
          <img src={loginSuccess} alt="Success Logo" className="login-logo" />
          <h1 className="login-text">user: {username}</h1>
          <h1 className="login-text">address: not set</h1>
          <h1 className="login-text">payment method: not set</h1>
          <div className="custom-div"></div>
          <h1 className="login-text">contact support</h1>
        </div>
        </div>
      ) : (
        <div className="center-app">
          <NavBar />
        <div className="login-card">
          <img src={loginLogo} alt="Login Logo" />
          <p>You must log in to access this page.</p>
        </div>
        </div>
      )}
    </>
  );
};


export default MyProfile;
