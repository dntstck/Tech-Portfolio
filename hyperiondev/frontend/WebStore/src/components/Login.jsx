// Login
// login component
// Dru Delarosa | @dntstck

import React, { useContext, useState } from "react";
import "./Login.css";
import loginLogo from "/login.svg";
import loginSuccess from "/login-success.svg";
import { AuthContext } from "./AuthContext";

function Login() {
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
        <div className="login-card">
          <img
            src={loginSuccess}
            className={`login-success ${isLoggingIn ? "fade-in" : ""}`}
            alt="Success Logo"
          />
          <h1>Welcome, {username}.</h1>
          <button className="login-button" onClick={logout}>
            Logout
          </button>
          <div className="customer-login">
            <sup>Welcome to reJava</sup>
          </div>
        </div>
      ) : (
        <div className="login-card">
          <img
            src={loginLogo}
            className={`login-logo ${isLoggingIn ? "fade-out" : ""}`}
            alt="Login Logo"
          />
          <form onSubmit={handleLogin}>
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Enter Username..."
              required
            />
            <div className="custom-div"></div>
            <button className="login-button" type="submit">
              Login
            </button>
            <div className="customer-login">
              <sup>reJava Customer Login 1.0</sup>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
