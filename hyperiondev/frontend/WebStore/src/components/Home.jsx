// Home
// route to /Home (/)
// Dru Delarosa | @dntstck

import { useNavigate } from "react-router-dom";
import NavBar from "../routes/NavBar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Login from './Login'
import { AuthContext } from "./AuthContext";

export default function Home() {
  const nav = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="center-app">
      <NavBar />
      <Login />
    </div>
  );
}
