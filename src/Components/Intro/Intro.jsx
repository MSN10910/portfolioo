import React, { useState, useEffect } from "react";
import "./Intro.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import React icons
import { themeContext } from "../../context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // State to control the animation
  const [typedName, setTypedName] = useState("");
  const [isDeveloper, setIsDeveloper] = useState(true);
  useEffect(() => {
    const name = isDeveloper ? "Developer" : "Designer";
    let i = 1; // Start from 1 to skip the first letter
    let typed = name[0]; // Initialize with the first letter
    const interval = setInterval(() => {
      if (i < name.length) {
        typed += name[i]; // Append subsequent letters
        setTypedName(typed); // Update typed name
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDeveloper((prev) => !prev); // Switch between developer and designer
          setTypedName(name[0]); // Reset to display only the first letter
        }, 2000); // Adjust the delay before switching to the next word
      }
    }, 100); // Adjust the interval for typing speed
    return () => clearInterval(interval);
  }, [isDeveloper]);
  
  
  

  return (
    <div className="intro" id='home'>
      <div className="i-left">
      <div className="i-name">
      <span style={{ color: darkMode ? "red" : "" }}>Web</span>{" "}
      <span style={{ color: darkMode ? "red" : "" }}>{typedName}</span>
      <div>
        <span style={{ color: darkMode ? "white" : "" }}>Hi, I'm Wambui Joadin</span>
      </div>
      <p style={{ color: darkMode ? "white" : "" }} className="description">
        As a DevOps Engineer, I specialize in crafting dynamic and responsive web experiences.
      </p>
      <p style={{ color: darkMode ? "white" : "" }} className="description">
        My expertise lies in the MERN stack, including MongoDB, Express.js, React.js, and Node.js.
      </p>
    </div>
    

       

        <div className="i-icons">
        <a href="https://github.com/MSN10910" target="_blank" rel="noopener noreferrer">
            <FaGithub color={darkMode ? "white" : "black"} size={32} />
          </a>

          <a href="https://www.linkedin.com/in/maina-joadin-2a17582b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color={darkMode ? "white" : "black"} size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
