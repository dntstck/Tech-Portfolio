import { Link } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import TotalPrice from "../components/TotalPrice";
export default function NavBar() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="navbar">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-products">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-contact">
                  Contact
                </Link>
              </li>
              <li className="nav-username">user: <Link to="/myprofile">{username}</Link> <Button className="logout-button" onClick={logout}>x</Button></li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="navbar">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-products">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
