import React, { useEffect } from "react";
import ProjectCard from "./project-card";
import projects from "./projects.json";
import Searchbar from "./search-bar";
import { useSearchParams } from "react-router-dom";

export default function Project() {
  const [projectsDisplay, setProjectsDisplay] = React.useState(projects);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
    console.log(projectsDisplay); // get new values onchange
    // projects.filter((project) => {});
    setProjectsDisplay(
      projectsDisplay.sort((a, b) => {
        if (currentParams.sort === "title") {
          console.log(`sorting by title: ${a.title}, ${b.title}`);
          return a.title - b.title;
        } else {
          return a.dates - b.dates;
        }
      })
    );
    console.log(projectsDisplay); // get new values onchange
  }, [searchParams, projectsDisplay]);

  return (
    <div class="container-fluid p-2">
      <Searchbar />
      <ul class="grid auto-rows-auto auto-cols-auto">
        {projectsDisplay.map((project) => (
          <li>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
