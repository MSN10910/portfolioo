import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../context";

const Navbar = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="navbar-left">
          <div className="navbar-brand">Joadin</div>
          <Toggle />
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link spy={true} to="home" smooth={true}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link spy={true} to="services" smooth={true}>
                About Me
              </Link>
            </li>
            <li className="navbar-item">
              <Link spy={true} to="testimonials" smooth={true}>
                Testimonials
              </Link>
            </li>
            <li className="navbar-item">
              <Link spy={true} to="portfolio" smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className="navbar-item">
              <Link spy={true} to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
