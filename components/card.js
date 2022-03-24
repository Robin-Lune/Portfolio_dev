import React from "react";

const card = ({ title, description, image, live, code, technologies }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src={image}
            alt="projet réseau social d'entreprise"
            className="card-image"
          />
          <div className="card-links">
            {live ? (
              <div className="links live">
                <a href={live} target="_blank">
                  <p>
                    {"< "}LIVE{" />"}
                  </p>
                </a>
              </div>
            ) : null}

            {code ? (
            <div className="links code">
              <a href={code} target="_blank">
                <p>
                  {"< "}CODE{" />"}
                </p>
              </a>
            </div>) : null}

          </div>
          <div className="card-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Technologies :</h3>
            <ul>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
