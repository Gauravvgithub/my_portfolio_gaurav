import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile_img from "../../assets/about_profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_logo" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile_img} alt="profile-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a frontend developer with 1 year of professional experience, I
              bring a solid foundation in creating responsive and visually
              appealing web interfaces. I can efficiently design modern,
              user-friendly layouts with precision and adaptability, catering to
              various screen sizes and devices.
            </p>
            <p>
              In addition, I am skilled in JavaScript and React.js, enabling me
              to develop dynamic, interactive, and scalable web applications. By
              combining technical proficiency with attention to detail, I
              deliver polished solutions that align with project requirements
              and enhance overall functionality.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <h2 style={{ textAlign: "center" }}>My Skills</h2>
            </div>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <FontAwesomeIcon className="langIcon"
                  icon={faHtml5}
                  beatFade
                  style={{ color: "#e34c26", fontSize: "75px", marginTop:"10px" }}
                />
            </div>
            <div className="about-skill">
                <FontAwesomeIcon className="langIcon"
                  icon={faCss3Alt}
                  beatFade
                  style={{ color: "#0264e4", fontSize: "75px" , marginTop:"10px"}}
                />
            </div>
            <div className="about-skill">
                <FontAwesomeIcon className="langIcon"
                  icon={faBootstrap}
                  beatFade
                  style={{ color: "#8c00ff", fontSize: "75px" , marginTop:"10px"}}
                />
            </div>
            <div className="about-skill">
                <FontAwesomeIcon className="langIcon"
                  icon={faJs}
                  beatFade
                  style={{ color: "#FFD43B", fontSize: "75px", marginTop:"10px" }}
                />
            </div>
            <div className="about-skill">
                <FontAwesomeIcon className="langIcon"
                  icon={faReact}
                  beatFade
                  style={{ color: "#0091ff", fontSize: "75px" , marginTop:"10px"}}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>01+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
