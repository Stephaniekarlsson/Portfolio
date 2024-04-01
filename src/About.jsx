import React from "react";
import "./about.css";
import profile from "./assets/profile-3.png";

function About() {
  return (
    <section>
      <div className="img-container">
        <img
          className="profile-img-about profile-item"
          src={profile}
          alt="profile picture"
        />
        <div className="about-text-container">
          <h2 >About me</h2>
          <p className="about-text profile-item">
            Mitt intresse för teknik och kreativitet väcktes redan i barndomen
            när jag experimenterade med att modifiera kod i befintliga mallar på
            blogg.se. Därifrån utvecklades min passion vidare till
            bildredigering och kodning i anteckningar. <br /> <br />Efter att ha tillbringat
            många år inom servicebranschen insåg jag att det var dags att
            återuppliva mina tidigare intressen och satsa på en karriär inom
            frontend-utveckling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
