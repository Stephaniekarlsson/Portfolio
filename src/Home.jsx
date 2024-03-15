import React from "react";
import profile from "./assets/profile-3.png";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <section>
      <div className="img-container">
        <img
          className="profile-img profile-item"
          src={profile}
          alt="profile picture"
        />
        <h2 className="profile-text profile-item">
          Hej! Jag är en entusiastisk <span>frontend student</span> som hela
          tiden vill utvecklas och komma framåt.
        </h2>
      </div>
    </section>
  );
}

export default Home;
