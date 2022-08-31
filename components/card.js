import Image from "next/image";
import { Parallax } from "react-scroll-parallax";


const Card = ({ title, description, text, image, live, code, technologies }) => {
  return (
    <section className="card">
      <Parallax speed={15} className="card__left_container">

      <div className="card__left_container__2">

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
      </Parallax>

      <Parallax speed={-30} className="card__right_container" >
      
      <div className="card__right_container__2">
        <Image
          width={520}
          height={315}
          src={image}
          alt={title}
          className="card-image"
        />
      </div>

      </Parallax>


    </section>
  );
};

export default Card;
