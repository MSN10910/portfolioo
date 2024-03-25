import React, { useContext } from "react";
import "./Services.css";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../context";

const Services = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <div className={`services ${darkMode ? "dark-mode" : ""}`} id="Services">
      <div className="left-side">
        <div className="content">
          <h2
            style={{ color: darkMode ? "red" : "#333" }}
            className="title"
          >
            About Me
          </h2>
          <p
            style={{ color: darkMode ? "#FFF" : "#666" }}
            className="description"
          >
            Greetings! I'm a passionate web developer hailing from the vibrant
            city of Nairobi, Kenya. With a keen eye for detail and a love for
            crafting immersive digital experiences, I specialize in the MERN
            stack, utilizing the power of MongoDB, Express.js, React.js, and
            Node.js to bring dynamic web applications to life. <br/>My journey into
            the world of web development began with a curiosity-driven
            exploration of programming languages and technologies. Over the
            years, I've honed my skills through hands-on projects and
            collaborative ventures, constantly seeking to push the boundaries of
            innovation in the digital realm.
          </p>
          {/* <a href={Resume} download className="button download-button">Download CV</a> */}
        </div>
      </div>

      <div className="right-side">
        <div className="cards">
          <Card
            emoji={Glasses}
            heading={"Skills"}
            detail={"Html, Css, Javascript, React, Node js"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
