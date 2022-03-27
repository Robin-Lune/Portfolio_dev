import Image from "next/image";

const Card = ({ title, description, image, live, code, technologies }) => {
  return (
    <div className="card">
      <div className="card-image">
        {/* <img
            src={image}
            alt="projet réseau social d'entreprise"
            className="card-image"
          /> */}
        <Image
          width={700}
          height={420}
          src={image}
          alt={title}
          className="card-image"
        />
        <div className="card-links">
          {live ? (
            <div className="links live">
              <a href={live} target="_blank" rel="noreferrer">
                <p>
                  {"< "}LIVE{" />"}
                </p>
              </a>
            </div>
          ) : null}

          {code ? (
            <div className="links code">
              <a href={code} target="_blank" rel="noreferrer">
                <p>
                  {"< "}CODE{" />"}
                </p>
              </a>
            </div>
          ) : null}
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
  );
};

export default Card;
