import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCediSign,
  faPuzzlePiece,
  faReact,
} from "@fortawesome/free-solid-svg-icons";
import { faRectangleList, faUser } from "@fortawesome/free-regular-svg-icons";
import { FaHtml5, FaInternetExplorer, FaPhp, FaReact } from "react-icons/fa";
import { FaBeer, FaPython } from "react-icons/fa";

const Skills = (props) => {
  return (
    <div className="skills-cards">
      {props.icon}
      <div className="skill-title">
      <FontAwesomeIcon icon="fa-brands fa-react" />
        <h3 className="primary">{props.title}</h3>
      </div>
    </div>
  );
};

export default Skills;
