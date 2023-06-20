import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  selectProjects,
  allProjects,
} from "../../utils/reducers.js";
import { useSearchParams } from "react-router-dom";

// TODO: add inclusion / exclusion variables? AND / OR?

// for filters that return items from the given list with every filter selected
function filterANDAllParams(items, filterParams) {
  //   var lcItems = items.map((item) =>
  //     item.skills.map((skill) => skill.toLowerCase())
  //   );

  //   console.log(`lcItems: ${lcItems}`);
  return items.filter((item) => {
    return filterParams.every((param) => {
      console.log(`item: ${item}, param: ${param}`);
      return item.skills
        .map((skill) => skill.toLowerCase())
        .includes(param.toLowerCase());
    });
  });
}

// for filters that return items from the given list with any filter selected
function filterORAllParams(items, filterParams) {
  return items.filter((item) => {
    return filterParams.some((param) => {
      return item.skills.includes(param);
    });
  });
}

export default function Filter() {
  const qWord = "f";
  const filterListItems = ["git", "app", "API", "android studio"];
  const [searchParams, setFilterParams] = useSearchParams();
  //   console.log(`searchParams: ${searchParams}`);
  const filterParams = searchParams.get(qWord)?.split(",") || [];
  //   console.log(`filterParams: ${filterParams.length}`);
  const projects = useSelector(selectProjects);
  const updateProjects = useDispatch();

  useEffect(() => {
    console.log(`filterParams: ${filterParams}`);
    if (filterParams.length === 0 || searchParams.get(qWord) === null) {
      updateProjects(setProjects(allProjects));
    } else {
      updateProjects(
        setProjects(filterANDAllParams(allProjects, filterParams))
      );
    }
  }, [searchParams]);

  const removeFilterParam = (checkValue) => {
    const newFilterParams = filterParams
      .filter((param) => param !== checkValue)
      .toString()
      .toLowerCase();
    newFilterParams
      ? setFilterParams({
          [qWord]: newFilterParams,
        })
      : setFilterParams({});
  };

  const filterOnChange = (checkStatus, checkValue) => {
    console.log(`checkStatus: ${checkStatus}`);
    if (checkStatus) {
      setFilterParams({
        [qWord]: [...filterParams, checkValue].toString().toLowerCase(),
      });
    } else {
      removeFilterParam(checkValue);
    }
  };

  return (
    <div class="flex flex-col space-y-1">
      <div class="flex flex-row items-center">
        <button class="" onClick={() => setFilterParams([])}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
        <p class="mx-3 my-2">Show projects that include: </p>
        <div class="flex flex-row">
          {filterParams.map((param) => (
            <p
              class="bg-slate-400 text-sm p-1 m-1 content-center text-slate-50 rounded-md cursor-pointer"
              onClick={() => removeFilterParam(param)}>
              {param.toLowerCase()}
            </p>
          ))}
        </div>
      </div>
      <div class="form-control flex flex-row">
        {filterListItems.map((item) => (
          <label
            key={item}
            class="flex label cursor-pointer w-fit text-sm -my-2 space-x-2">
            <input
              type="checkbox"
              class="checkbox checkbox-sm"
              value={item.toLowerCase()}
              checked={filterParams.includes(item.toLowerCase())}
              onChange={(e) => {
                filterOnChange(e.target.checked, e.target.value);
              }}
            />
            <span class="label-text text-xs">{item.toUpperCase()}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
