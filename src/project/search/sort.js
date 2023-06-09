import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjects, selectProjects } from "../../utils/reducers.js";

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

  // pretty straight forward helper function
  const radioOnClick = (value) => {
    setSortOrder(value);
  };

  useEffect(() => {
    if (sortOrder !== 0) {
      updateProjects(
        setProjects(sortItems(projects, sortFuncByPara(sortParam), sortOrder))
      );
      console.log(projects);
    }
  }, [sortOrder, sortParam]);

  return (
    <div>
      <p>
        Sort placeholder: attempting to sort projects by "{sortParam}" in{" "}
        {sortOrder} order
      </p>
      <div class="form-control">
        <label class="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            value={1}
            class="radio checked:bg-red-500"
            onClick={(e) => radioOnClick(e.target.value)}
          />
          <span class="label-text">Ascending</span>
        </label>
        <label class="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            value={0}
            class="radio checked:bg-purple-500"
            onClick={(e) => radioOnClick(e.target.value)}
          />
          <span class="label-text">No Sort</span>
        </label>
        <label class="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            value={-1}
            class="radio checked:bg-blue-500"
            onClick={(e) => radioOnClick(e.target.value)}
          />
          <span class="label-text">Descending</span>
        </label>
      </div>
    </div>
  );
}
