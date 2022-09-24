import { useEffect, useState } from "react";
import Head from "next/head";
import Card from "../components/card";
import useReadingProgress from "../components/useReadingProgress";
import Image from "next/image";
import cercleBg from "/public/images/cercle2.webp";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/api/projets")
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, []);

  const completion = useReadingProgress();
  const [completed, setCompleted] = useState(false);

  const changeCompletion = () => {
    if (completion > 90) {
      setCompleted(true);
    } else if (document.body.scrollHeight === window.innerHeight) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  useEffect(() => {
    changeCompletion();
  });
  console.log(completed);

  return (
    <div className="projects">
      <div className="projects__bg">
        <Image
          src={cercleBg}
          alt="cercle"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <Head>
        <title>Robin LEBON - Projets</title>
        <meta
          name="description"
          content="Portfolio de mes différents projets de développeur wet et web mobile. Vous pouvez y retrouver les liens de chaques sites et applications que j'ai réalisé, ainsi que leurs liens Github."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>PROJETS</h1>

      <div className="card-container">
        {project.length === 0 ? (
          <Card
            key={null}
            title={"Chargement..."}
            description={null}
            technologies={["chargement..."]}
            live={null}
            code={null}
            image={"/images/site-dev.webp"}
          />
        ) : (
          project.map((proj) => (
            <Card
              key={proj.image}
              title={proj.title}
              description={proj.description}
              technologies={proj.technologies}
              live={proj.live}
              code={proj.code}
              image={proj.image}
              text={proj.text}
            />
          ))
        )}
      </div>
      <img
        className={`scroll_mobile ${completed ? "--disengage--mobile" : ""}`}
        src="./images/scroll.webp"
        alt="flèche vers le bas"
      />
    </div>
  );
};

export default Project;
