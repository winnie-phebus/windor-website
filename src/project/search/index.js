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
        project.title.toLowerCase().includes(keyterm.toLowerCase())
      );
      console.log(`keyterm: ${keyterm}, projects: ${filterProjects}`);
      updateProjects(setProjects(filterProjects));
    } else {
      updateProjects(initProjects());
      console.log(`keyterm: ${keyterm}, projects: ${projects}`);
    }
  };

  // TODO: properly implement the submit button / functionality. Consider abstracting form to a parent object when adding filter / sort
  return (
    <form class="focus:outline-none ">
      <div class="relative text-slate-200 focus-within:text-gray-400 focus:border-transparent">
        <span class="absolute inset-y-0 left-0 flex items-center pl-1">
          <button type="submit" class="p-1 focus:outline-none" disabled>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="h-6 w-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          class="form-input rounded-lg border-transparent bg-slate-500 py-2 pl-10 text-sm text-white focus:border-transparent focus:bg-slate-100 focus:text-gray-900 focus:outline-8 w-full focus-within:outline-none"
          placeholder="Search..."
          autocomplete="off"
          onChange={(e) => onChange(e.target.value)}
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
          <button type="reset" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </span>
      </div>
    </form>
  );
}
