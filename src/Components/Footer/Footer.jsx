import React, { useContext } from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <div className="f-content">
        <span style={{ color: darkMode ? "white" : "black" }}>
          mainajoadin100@gmail.com
        </span>
        <div className="f-icons">
          <a href="https://www.instagram.com/neymaish/" target="_blank" rel="noopener noreferrer">
            <Insta color={darkMode ? "white" : "black"} size="3rem" />
          </a>
      
          <a href="https://github.com/MSN10910" target="_blank" rel="noopener noreferrer">
            <Github color={darkMode ? "white" : "black"} size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
