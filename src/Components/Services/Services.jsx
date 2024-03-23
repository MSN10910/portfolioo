import React, { useContext } from "react";
import "./Services.css"
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../context"; // Import theme context

const Services = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <div className={`services ${darkMode ? 'dark-mode' : ''}`} id="Services">
      {/* Left side */}
      <div className="left-side">
        <div className="content">
          <h2 style={{ color: darkMode ? "red" : "" }} className="title">My Skills</h2>
          <p style={{ color: darkMode ? "white" : "" }} className="description">
            As a web developer, I offer expertly crafted websites that blend stunning design with seamless functionality.
          </p>
          {/* <a href={Resume} download className="button download-button">Download CV</a> */}
        </div>
      </div>

      {/* Right side */}
      <div className="right-side">
        <div className="cards">
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React, Node js"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
