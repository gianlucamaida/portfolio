import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/Expertise.scss";
import { faDownload, faLaptopCode, faRocket, faTools } from "@fortawesome/free-solid-svg-icons";

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>About me</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Personal Info</h3>
            <p>
              "Hi! I'm Gianluca, 24 y/o, from Capo d’Orlando a small seaside town in Sicily. I moved
              to Turin for my studies at Politecnico di Torino, where I completed my bachelor’s in
              Management Engineering and am now finishing my master’s in Computer Engineering. I’m
              passionate about technology and programming, and in my free time, I enjoy skiing and
              spending time on a boat when I'm back in Sicily."
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRocket} size="3x" />
            <h3> Project Experience</h3>
            <p>
              Throughout my studies, I worked on various university projects, both individually and
              in teams, developing web and mobile applications, system-level tools, and interactive
              platforms. These experiences helped me improve my problem-solving skills, understand
              the software development lifecycle, and gain hands-on experience with modern
              technologies.{" "}
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faTools} size="3x" />
            <h3>Skills & Tools</h3>
            <p>
              "I have experience working with a variety of technologies, including JavaScript, Rust,
              Java and Python. I’ve used React and React-Native to build web and mobile
              applications, Additionally, I’m familiar with Git for version control and Docker for
              containerization, streamlining development and deployment."
            </p>
          </div>
        </div>
      </div>
      <div className="cv-download-container">
        <a
          href="/Curriculum.pdf"
          download="Curriculum.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cv-download-button">
            <FontAwesomeIcon icon={faDownload} className="ico" />
            Download My CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Expertise;
