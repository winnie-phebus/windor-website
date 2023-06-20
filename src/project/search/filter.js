/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  selectProjects,
  allProjects,
} from "../../utils/reducers.js";
import { useSearchParams } from "react-router-dom";
import Icon from "../../utils/components/icon.js";
import { PATHS, ICONS } from "../../utils/constants.js";

// for filters that return items from the given list with every filter selected
function filterANDAllParams(items, filterParams) {
  return items.filter((item) => {
    return filterParams.every((param) => {
      console.log(`item: ${item}, param: ${param}`);
      return item.skills
        .map((skill) => skill.toLowerCase())
        .includes(param.toLowerCase());
    });
  });
}

// for filters that return items from the given list with any filter selected, currently optional
// TODO: STRETCH GOAL: implement the ability to optionally select between both AND and OR filters
// function filterORAllParams(items, filterParams) {
//   return items.filter((item) => {
//     return filterParams.some((param) => {
//       return item.skills.includes(param);
//     });
//   });
// }

export default function Filter() {
  const qWord = PATHS.FILTER_KEY;
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
      <div class="flex flex-row items-center space-x-2">
        {/* <button class="" onClick={() => setFilterParams([])}> */}
        <Icon icon={ICONS.xmark} onClick={() => setFilterParams([])} />
        {/* </button> */}
        <p class="mr-3 my-2">Show projects that include: </p>
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
