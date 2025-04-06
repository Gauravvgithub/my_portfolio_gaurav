import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_logo" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={about_profile_img}
            alt="profile-image"
            style={{ width: "30rem", height: "50rem" }}
          />
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
              <h2 style={{textAlign:"center"}}>My Performance</h2>
            </div>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS <span>Tailwind and BootStrap</span> </p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#b415ff"}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#b415ff" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>React</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#b415ff"}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
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
