// MyProfile
// MyProfile component
// Dru Delarosa | @dntstck

import React, { useContext, useState } from "react";
import "./Login.css";
import loginLogo from "/login.svg";
import loginSuccess from "/login-success.svg";
import { AuthContext } from "./AuthContext";
import NavBar from "../routes/NavBar";

function Settings() {
  const { isLoggedIn, username, login, logout } = useContext(AuthContext);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = event.target.elements.username.value;

    setIsLoggingIn(true);

    setTimeout(() => {
      login(user);
      setIsLoggingIn(false);
    }, 800);
  };
  return (
    <>
      {isLoggedIn ? (
        <div>
          <NavBar />
        <div className="login-card">
          <img src={loginSuccess} alt="Success Logo" />
          <h1>Welcome to your profile, {username}.</h1>
          <button className="login-button" Click={logout}>
            Logout
          </button>
        </div>
        </div>
      ) : (
        <div>
          <NavBar />
        <div className="login-card">
          <img src={loginLogo} alt="Login Logo" className="login-logo" />
          <p>You must log in to access this page.</p>
        </div>
        </div>
      )}
    </>
  );
}

export default Settings;
