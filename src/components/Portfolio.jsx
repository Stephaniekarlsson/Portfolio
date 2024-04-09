import React from "react";
import "../styles/portfolio.css";
import Ratthjalpen from "../assets/mockup - rh-lott.png";
import Pokemanager from "../assets/mockup - pokemanager.png";
import Hangman from "../assets/mockup - hangman.png";
import Conference from "../assets/mockup - battrewebb.png";

function Portfolio() {
  const handleDivClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <div className="main-container">
        <div
          className="projects"
          onClick={() =>
            handleDivClick(
              "https://stephaniekarlsson.github.io/slumpgenerator-RH/"
            )
          }
        >
          <img className="project-img" src={Ratthjalpen} alt="" />
          <div className="text-container">
            <h2>Virtuell Lottdragare</h2>
            <p>
              Projekt för Råtthjälpen där de behövde ha ett verktyg för att
              smidigt kunna dra ett vinnande namn i deras lottdragningar
            </p>
          </div>
        </div>
        <div
          className="projects reverse"
          onClick={() =>
            handleDivClick("https://stephaniekarlsson.github.io/pokemanager/")
          }
        >
          <img className="project-img" src={Pokemanager} alt="" />
          <div className="text-container">
            <h2>Pokemanager</h2>
            <p>
              Skoluppgift där vi skulle skapa en pokemanger genom PokeAPI. Man
              ska kunna lägga till 3 pokemon i ett lag och flera i ett
              reservlag.
            </p>
          </div>
        </div>
        <div
          className="projects"
          onClick={() => handleDivClick("https://azrsara.github.io/Hangman/")}
        >
          <img className="project-img" src={Hangman} alt="" />
          <div className="text-container">
            <h2>Hänga gubbe</h2>
            <p>
              Gruppuppgift där vi tillsammans skulle bygga ett hänga gubbe spel
            </p>
          </div>
        </div>
        <div
          className="projects reverse"
          onClick={() => handleDivClick("https://gamy-air.surge.sh/")}
        >
          <img className="project-img" src={Conference} alt="" />
          <div className="text-container">
            <h2>Konferens</h2>
            <p>
              Första individuella uppgiften som endast är gjort i HTML & CSS.
              Webbsida för en konferens där man kan se alla dess seminarium och
              anmälan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
