import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  selectProjects,
  initProjects,
  allProjects,
} from "../../utils/reducers.js";

// first going to 'hardcode' this searchbar to focus on searching through project TITLES
export default function Searchbar(keyword = "") {
  //   console.log(`keyword: ${keyword}`);
  // keyword defaults to [object Object] for some reason?? Will investigate later if keyword is even needed
  const [keyterm, setKeyterm] = useState("");
  const projects = useSelector(selectProjects);
  const updateProjects = useDispatch();

  const onChange = (keyterm) => {
    setKeyterm(keyterm);
    console.log(`keyterm: ${keyterm}`);
    if (keyterm !== "") {
      //   console.log(projectInit);
      var filterProjects = allProjects.filter((project) =>
        project.title.includes(keyterm)
      );
      console.log(`keyterm: ${keyterm}, projects: ${filterProjects}`);
      updateProjects(setProjects(filterProjects));
    } else {
      updateProjects(initProjects());
      console.log(`keyterm: ${keyterm}, projects: ${projects}`);
    }
  };

  return (
    <input
      class="bg-slate-400 p-2 text-white w-full rounded-md"
      key="search-bar"
      value={keyterm}
      placeholder="Search projects!"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
