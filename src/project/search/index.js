import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  setProjects,
  selectProjects,
  initProjects,
  allProjects,
} from "../../utils/reducers.js";
import Icon from "../../utils/components/icon.js";
import { ICONS } from "../../utils/constants.js";

// TODO: come up with an alternative way to handle in place search/ filtering. This impl is not ideal
function searchUsingKeyterm(keyword) {
  return allProjects.filter((project) =>
    project.title.toLowerCase().includes(keyword.toLowerCase())
  );
}
// first going to 'hardcode' this searchbar to focus on searching through project TITLES
export default function Searchbar() {
  //   console.log(`keyword: ${keyword}`);
  // keyword defaults to [object Object] for some reason?? Will investigate later if keyword is even needed
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyterm, setKeyterm] = useState(searchParams.get("q") || "");
  // const projects = useSelector(selectProjects);
  const updateProjects = useDispatch();

  useEffect(() => {
    keyterm
      ? updateProjects(setProjects(searchUsingKeyterm(keyterm)))
      : updateProjects(initProjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyterm]);

  useEffect(() => {
    setKeyterm(searchParams.get("q") || "");
  }, [searchParams]);

  // TODO: reconsider using this onChange function, as it is not needed for the search bar to work
  const onChange = (keyterm) => {
    setKeyterm(keyterm);
    console.log(`keyterm: ${keyterm}`);
  };

  // TODO: Consider abstracting form to a parent object when adding filter / sort
  return (
    <form class="focus:outline-none w-full">
      <div class="relative text-slate-200 focus-within:text-gray-400 focus:border-transparent">
        <span class="absolute inset-y-0 left-0 flex items-center pl-1">
          <button
            type="submit"
            class="p-1 focus:outline-none"
            onSubmit={() => {
              keyterm ? setSearchParams({ q: keyterm }) : setSearchParams({});
            }}>
            <Icon icon={ICONS.search} viewBox="0 0 24 24" />
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
          {/* TODO: actually implement reset - it needs to adjust query as well as reset the projects */}
          <button type="reset" onClick={() => {}}>
            <Icon icon={ICONS.xmark} />
          </button>
        </span>
      </div>
    </form>
  );
}
