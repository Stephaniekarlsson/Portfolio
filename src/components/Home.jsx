import React from "react";
import profile from "../assets/profile-3.png";
import { Link } from "react-router-dom";
import "../styles/home.css";
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.section 
    initial= {{opacity: 0}}
    animate= {{opacity: 1}}
    exit= {{opacity: 0}}
    transition= {{duration: 1}}
    >
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
    </motion.section>
  );
}

export default Home;
