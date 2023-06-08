import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "./project-card";
import { useSearchParams } from "react-router-dom";
import { initProjects, selectProjects } from "../utils/reducers.js";
import AdvancedSearchObject from "./search/advancedSSOF";

export default function Project() {
  // const [projectsDisplay, setProjectsDisplay] = useState(projects);
  const [searchParams] = useSearchParams();

  const projects = useSelector(selectProjects);
  const setProjects = useDispatch();

  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  //   console.log(currentParams); // get new values onchange
  //   console.log(projects); // get new values onchange
  //   // projects.filter((project) => {});
  //   setProjects(
  //     projects.sort((a, b) => {
  //       if (currentParams.sort === "title") {
  //         console.log(`sorting by title: ${a.title}, ${b.title}`);
  //         return a.title - b.title;
  //       } else {
  //         return a.dates - b.dates;
  //       }
  //     })
  //   );
  //   console.log(projects); // get new values onchange
  // }, [searchParams, projects]);

  return (
    <div class="container-fluid p-2">
      <AdvancedSearchObject />
      <ul class="grid grid-rows-3">
        {projects.map((project) => (
          <li>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
