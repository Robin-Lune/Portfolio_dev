import Image from "next/image";

const Card = ({ title, description, text, image, live, code, technologies }) => {
  return (
    <section className="card">
      <div className="card__left_container">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="card__left_container__text">
          <p>{text}</p>

        </div>
        <div className="card__left_container__techno">
          <h3>Technologies utilisées</h3>

          <ul>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>


        <div className="card__left_container__code">
          {live ? (
            <div className="link" >
              <a href={live} target="_blank" rel="noreferrer" data-text="< LIVE />">
                {"< "}LIVE{" />"}

              </a>
            </div>
          ) : null}

          {code ? (
            <div className="link" >
              <a href={code} target="_blank" rel="noreferrer" data-text="< CODE />">

                {"< "}CODE{" />"}

              </a>
            </div>
          ) : null}
        </div>

      </div>

      <div className="card__right_container">
        <Image
          width={520}
          height={315}
          src={image}
          alt={title}
          className="card-image"
        />
      </div>


    </section>
  );
};

export default Card;
