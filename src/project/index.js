import React from "react";
import ProjectCard from "./project-card";
import projects from "./projects.json";

export default function Project() {
  return (
    <ul>
      {projects.map((project) => (
        <li>
          <ProjectCard project={project} />
        </li>
      ))}
      {/* <li>
        {console.log(projects[0].title)}
        <ProjectCard project={projects[0]} />
      </li> */}
    </ul>
  );
}
