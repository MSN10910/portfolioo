import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../context"; // Import theme context

const Experience = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <div className={`experience ${darkMode ? 'dark-mode' : ''}`} id="Experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{ color: darkMode ? "red" : "" }} >Years</span> <br/>
        <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">7</div>
        <span style={{ color: darkMode ? "red" : "" }}>Completed</span> <br/>
        <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      </div>
    </div>
  );
};

export default Experience;
