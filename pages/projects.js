import { useEffect, useState } from "react";
import Head from "next/head";
import Card from "../components/card";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/api/projets")
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="projects">
      <Head>
        <title>Robin LEBON - Projets</title>
        <meta
          name="description"
          content="Portfolio des différents projets de développeur."
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
            image={"/images/site-dev.jpg"}
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
    </div>
  );
};

export default Project;
