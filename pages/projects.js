import {useEffect, useState}  from "react";
import Head from "next/head";
import Card from "../components/card";



const Project = () => {
const [project, setProject] = useState([]);

useEffect(() => {
    fetch("/api/projets")
    .then(res => res.json())
    .then(data => setProject(data))
    .catch(err => console.log(err))
}, [])

console.log(project)

    
  return (
  

    <div className="projects">

        <Head>
        <title>Robin LEBON - Projets</title>
        <meta name="description" content="Portfolio des différents projets de développeur." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>ls -a /Projects </h1>
      <div className="card-container">
        {project.map(proj => (
          <Card
            key={proj.image}
            title={proj.title}
            description={proj.description}
            technologies={proj.technologies}
            live={proj.live}
            code={proj.code}
            image={proj.image}
          />
        ))}
        
    </div>
    </div>
  );
};

export default Project;
