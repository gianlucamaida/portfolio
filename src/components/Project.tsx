import React from "react";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/Zurehma/SE2-Kiruna_eXplorer" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://github.com/Zurehma/SE2-Kiruna_eXplorer" target="_blank" rel="noreferrer">
            <h2>Kiruna eXplorer</h2>
          </a>
          <p>
            Web Application for Municipal Relocation of Kiruna. The platform is designed to document
            and manage the entire relocation process of the city. It provides tools for tracking
            progress by adding geo-located documents, linking existing documents to each other.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/ProgrammazioneDiSistema2024-IA-ZZ/Group-32"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ProgrammazioneDiSistema2024-IA-ZZ/Group-32"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Emergency Backup</h2>
          </a>
          <p>
            A background application for automatic backup allowing users to select folders and
            trigger the backup by tracing a sign on the screen, even if it's broken. It also
            monitors CPU usage to minimize resource impact.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/gianlucamaida/GemHunter" target="_blank" rel="noreferrer">
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://github.com/gianlucamaida/GemHunter" target="_blank" rel="noreferrer">
            <h2>GemHunter</h2>
          </a>
          <p>
            Mobile app for discovering hidden attractions. Users can create itineraries, add gems
            with photos, and track their progress. It features a map to view found and unfound gems,
            along with a collection deck to summarize the user's discoveries.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/gianlucamaida/gioco-dei-meme-public"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/gianlucamaida/gioco-dei-meme-public"
            target="_blank"
            rel="noreferrer"
          >
            <h2>What Do You Meme?</h2>
          </a>
          <p>
            Is a website based on the game "What Do You Meme?". Users participate in rounds where
            they must guess the correct response to a meme presented. The site awards points for
            each correct answer and provides a summary of the performance, creating a fun gaming
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
