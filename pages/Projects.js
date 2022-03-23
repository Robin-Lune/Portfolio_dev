import React from "react";

const Project = () => {
  return (
    <div className="projects">
      <h1>ls -a /Projects </h1>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img
              src="./images/groupomania.png"
              alt="projet réseau social d'entreprise"
              className="card-image"
            />
            <div className="card-links">
              <div className="links live">
                <a href="https://groupomania.robin-lebon.com/" target="_blank">
                  <p>
                    {"< "}LIVE{" />"}
                  </p>
                </a>
              </div>

              <div className="links code">
                <a
                  href="https://github.com/Robin-Lune/RobinLebon_7_22072021"
                  target="_blank"
                >
                  <p>
                    {"< "}CODE{" />"}
                  </p>
                </a>
              </div>
            </div>
            <div className="card-text">
              <h2>Groupomania</h2>
              <p>Projet de réseau social pour une entreprise fictive.</p>
              <h3>Technologies :</h3>
              <ul>
                <li>Nginx</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>MYSQL</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              src="./images/site-photo.jpg"
              alt="site professionnel de photographe"
              className="card-image"
            />
            <div className="card-links">
              <div className="links live">
                <a href="https://robin-lebon.com/" target="_blank">
                  <p>
                    {"< "}LIVE{" />"}
                  </p>
                </a>
              </div>
            </div>
            <div className="card-text">
              <h2>Site Professionnel de Photographe</h2>
              <p>Site vitrine de photographe.</p>
              <h3>Technologies :</h3>
              <ul>
                <li>Nginx</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              src="./images/site-dev.jpg"
              alt="site portfolio de développeur"
              className="card-image"
            />
            <div className="card-links">
              <div className="links live">
                <a
                  href="#"
                  onClick={() => {
                    alert("Vous y êtes deja! :p ");
                  }}
                >
                  <p>
                    {"< "}LIVE{" />"}
                  </p>
                </a>
              </div>

              <div className="links code">
                <a
                  href="https://github.com/Robin-Lune/RobinLebon_7_22072021"
                  target="_blank"
                >
                  <p>
                    {"< "}CODE{" />"}
                  </p>
                </a>
              </div>
            </div>
            <div className="card-text">
              <h2>Site Portfolio de développeur</h2>
              <p>Vous êtes ici !</p>
              <h3>Technologies :</h3>
              <ul>
                <li>Nginx</li>
                <li>NextJs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
