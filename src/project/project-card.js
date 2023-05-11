import React from "react";
import SkillList from "./skill-list";

export default function ProjectCard() {
  const exampleProject = {
    title: "Project Title",
    githubURI: "https://github.com/winnie-phebus/4550_project_team7",
    deployedURI: "",
    status: "In Progress",
    dates: "2023",
    type: "Project",
    types: ["Web", "School/ Academic", "Development", "Capstone"],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Integer sed erat varius, pharetra nisl vel, pharetra leo. Aliquam et orci est. Nam et ante dui. Donec ultricies ex diam, nec lobortis elit tristique.",
  };
  return (
    <div class="mx-auto my-2 w-5/6 bg-slate-300 p-2 hover:rounded-se-3xl">
      <div class="flex justify-between items-center space-x-4">
        <h1 class="text-lg font-bold uppercase tracking-widest">
          {exampleProject.title}
        </h1>
        <p class="px-1">{exampleProject.dates}</p>
      </div>
      <div class="flex justify-start text-xs sm:text-sm space-x-3 divide-x-2 py-1">
        <h4 class="">{exampleProject.type}</h4>
        <h4 class="px-3">{exampleProject.status}</h4>
      </div>
      <p class="my-1">{exampleProject.description}</p>
      <div class="items-center my-2 flex space-x-2 divide-x-2">
        <div class="w-1.5/5 sm:w-auto">
          <a class="hover:tracking-widest hover:text-red-400" href="#">
            {" "}
            [Deployed]{" "}
          </a>
          <a class="hover:tracking-widest hover:text-red-400" href="#">
            {" "}
            [Github Repo]{" "}
          </a>
        </div>
        <SkillList />
      </div>
    </div>
  );
}
