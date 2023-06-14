import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  selectProjects,
  allProjects,
} from "../../utils/reducers.js";

// resource: https://owlcation.com/stem/creating-a-sortable-list-in-react-js

// source: https://bobbyhadz.com/blog/react-sort-array-of-objects
function sortByString(aStr, bStr) {
  return aStr > bStr ? 1 : -1;
}

function sortByNumber(aNum, bNum) {
  return aNum - bNum;
}

// assumes the given a and b objects have a field 'date' that is approximately Date
function sortByDate(a, b) {
  //   console.log(`sorting by date: ${a.dates}, ${b.dates}`);
  return new Date(a.dates) - new Date(b.dates);
}

// assumes the given a and b objects have a field 'title' that is a String
function sortByTitle(a, b) {
  return sortByString(a.title, b.title);
}

function sortFuncByPara(sortParam = "title") {
  switch (sortParam) {
    case "date":
      return sortByDate;
    default:
      return sortByTitle;
  }
}

function sortItems(
  items,
  sortFunction = (a, b) => {
    return items;
  },
  sortOrder = 1
) {
  return [...items].sort((a, b) => {
    // console.log(`sorting by: ${a.title}, ${b.title}`);
    return sortOrder * sortFunction(a, b);
  });
}
// sortOrder is implemented as a multiplier, so 1 is ascending and -1 is descending, with 1 as the default
// the '0' case is no sorting at all, ideally I would then skip calling this function all together, will test the 0 case anyway tho
export default function Sort() {
  const [sortOrder, setSortOrder] = useState(0);
  const [sortParam, setSortParam] = useState("title");
  const projects = useSelector(selectProjects);
  const updateProjects = useDispatch();

  // pretty straight forward helper functions
  const radioOnClick = (value) => {
    setSortOrder(value);
    console.log(`radioOnClick: ${sortOrder}`);
  };

  // TODO: fix radio buttons - right now, they don't change to checked even in the correct conditions
  const checkedStatus = (value) => {
    console.log(
      `checkedStatus: ${sortOrder} === ${value}, ${sortOrder === value}`
    );
    return sortOrder === value;
  };

  useEffect(() => {
    checkedStatus(sortOrder);
    if (sortOrder !== 0) {
      updateProjects(
        setProjects(sortItems(projects, sortFuncByPara(sortParam), sortOrder))
      );
      console.log(projects);
    } else {
      updateProjects(setProjects(allProjects));
    }
    checkedStatus(sortOrder);
  }, [sortOrder, sortParam]);

  return (
    <div class="flex flex-row items-center space-x-2">
      <button class="" onClick={() => setSortOrder(0)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
      <p>Sort projects by "{sortParam}" in </p>
      <div class="form-control flex flex-row">
        <label class="label cursor-pointer w-fit space-x-2">
          <input
            type="radio"
            name="radio-10"
            value={1}
            checked={sortOrder === 1}
            class="radio checked:bg-red-500 radio-sm"
            onClick={(e) => {
              radioOnClick(e.target.value);
              checkedStatus(e.target.value);
            }}
          />
          <span class="label-text">Ascending</span>
        </label>
        <label class="label cursor-pointer w-fit space-x-2">
          <input
            type="radio"
            name="radio-10"
            value={-1}
            checked={sortOrder === -1}
            class="radio checked:bg-blue-500 radio-sm"
            onClick={(e) => radioOnClick(e.target.value)}
          />
          <span class="label-text">Descending</span>
        </label>
      </div>
      <p>= {sortOrder} order</p>
    </div>
  );
}
