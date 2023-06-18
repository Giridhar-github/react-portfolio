import React from "react";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCss3, FaHtml5, FaInternetExplorer, FaJava, FaPhp, FaReact } from "react-icons/fa";
import { FaBeer, FaPython } from "react-icons/fa";
const SubMain = () => {
  return (
    <>
      <div className="sub-main">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
        <div className="skills-container">
          <Skills icon={<FaPython size={50} className="skill-icon" />} title="Python" />
          <Skills icon={<FaReact size={50} className="skill-icon" />} title="React" />
          <Skills icon={<FaHtml5 size={50} className="skill-icon" />} title="HTML5" />
          <Skills icon={<FaPhp size={50} className="skill-icon" />} title="Php" />
          <Skills icon={<FaCss3 size={50} className="skill-icon" />} title="CSS" />
        </div>
      </div>
    </>
  );
};

export default SubMain;
