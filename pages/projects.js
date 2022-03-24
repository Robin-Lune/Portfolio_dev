import {useEffect, useState}  from "react";
import Card from "../components/card";

const Project = () => {
const [project, setProject] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/api/projects")
    .then(res => res.json())
    .then(data => setProject(data))
}, [])

console.log(project)

    
  return (
    <div className="projects">
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
