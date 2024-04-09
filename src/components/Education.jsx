import React from "react";
import "../styles/education.css";
import BadgeCheck from "../assets/bxs-badge-check.svg";
import CircleQuarter from "../assets/bx-circle-quarter.svg";
import UserIcon from "../assets/bxs-user (1).svg";
import Graduation from "../assets/bxs-graduation.svg";
import HTML5 from "../assets/bxl-html5.svg";
import CSS3 from "../assets/bxl-css3.svg";
import Javascript from "../assets/bxl-javascript.svg";
import Git from "../assets/bxl-git.svg";
import Github from "../assets/bxl-github.svg";
import Figma from "../assets/bxl-figma.svg";
import ReactIcon from "../assets/bxl-react.svg";

function Education() {
  return (
    <section>
      <div className="container">
        <div className="outer-main-container">
          <div className="courses">
            <h2>Kurser</h2>
            <div className="courses-p">
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={BadgeCheck}
                  alt="Badge check"
                />
                <p>HTML/CSS</p>
              </div>
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={BadgeCheck}
                  alt="Badge check"
                />
                <p>Javascript - grunder</p>
              </div>
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={BadgeCheck}
                  alt="Badge check"
                />
                <p>Grafiska vertyg</p>
              </div>
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={BadgeCheck}
                  alt="Badge check"
                />
                <p>UX och Usability</p>
              </div>
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={BadgeCheck}
                  alt="Badge check"
                />
                <p>Agila metoder</p>
              </div>
              <div className="icon-text">
                <img
                  className="check-icon"
                  src={CircleQuarter}
                  alt="Circle quarter"
                />
                <p>Javascript - React</p>
              </div>
              <p>Testning</p>
              <p>Fullstackutveckling</p>
              <p>LIA 1 och LIA 2</p>
              <p>Examensarbete</p>
            </div>
          </div>
          <div className="education-experience">
            <div className="experience">
              <img src={UserIcon} alt="User icon" />
              <p>Erfarenhet</p>
              <p>&lt;1 år</p>
              <p>Frontendutveckling</p>
            </div>
            <div className="education">
              <img src={Graduation} alt="Graduation icon" />
              <p>Utbildning</p>
              <p>NBI/Handelsakademin</p>
              <p>Hösten 2023 - Våren 2025</p>
              <p>Frontendutveckling</p>
            </div>
          </div>
        </div>
        <footer>
          <img src={HTML5} alt="HTML icon" />
          <img src={CSS3} alt="CSS icon" />
          <img src={Javascript} alt="Javascript icon" />
          <img src={Git} alt="Git icon" />
          <img src={Github} alt="Github icon" />
          <img src={Figma} alt="Figma icon" />
          <img src={ReactIcon} alt="React icon" />
        </footer>
      </div>
    </section>
  );
}

export default Education;
