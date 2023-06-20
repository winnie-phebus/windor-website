import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  selectProjects,
  allProjects,
} from "../../utils/reducers.js";
import { useSearchParams } from "react-router-dom";
import Icon from "../../utils/components/icon.js";
import { PATHS, ICONS } from "../../utils/constants.js";

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
  const orderQueryLabel = PATHS.SORT_ORDER_KEY; // represents the order of the sort, currently 1, -1, or null (default)
  const catQueryLabel = PATHS.SORT_CAT_KEY; // represent the category of what is sorted, will be either title or date for now

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState(searchParams.get(orderQueryLabel));
  const [sortParam, setSortParam] = useState(searchParams.get(catQueryLabel));
  const projects = useSelector(selectProjects);
  const updateProjects = useDispatch();

  // updates the url with the values of sortOrder changed by the radio buttons
  function setSortedOrder(order) {
    // const prevParams = { ...searchParams };
    order
      ? searchParams.has(orderQueryLabel)
        ? searchParams.set(orderQueryLabel, order)
        : searchParams?.append(orderQueryLabel, order)
      : searchParams?.delete(orderQueryLabel);
    // console.log(
    //   `!! searchParams: ${searchParams?.toString()} || ${JSON.stringify({
    //     // ...prevParams,
    //     order: order,
    //   })} !!`
    // );
    // order ?
    setSearchParams(searchParams);
    //   : setSearchParams({ ...searchParams });
    // console.log(`searchParams: ${searchParams}`);
  }

  // will continue further when the UI for selecting categories is implemented
  // TODO: 'category' is still buggy - url does not match with parameter, fix reset logic after settling on UI
  function setSortedParam(param) {
    setSearchParams(searchParams.set(catQueryLabel, param));
  }

  // updates the state value of sortOrder to match the url's params
  useEffect(() => {
    setSortOrder(searchParams.get(orderQueryLabel));
    setSortParam(searchParams.get(catQueryLabel));
  }, [searchParams]);

  // resets the sortOrder to null, which will be interpreted as no sorting
  function resetSort() {
    setSortedOrder();
    setSortParam("title");
  }

  // pretty straight forward helper functions
  const radioOnClick = (value) => {
    setSortedOrder(value);
    console.log(`radioOnClick: ${sortOrder}`);
  };

  // TODO: investigate why eqeqeq is not working here
  const checkedStatus = (value) => {
    console.log(
      `!!checkedStatus: ${sortOrder} === ${value}, ${sortOrder === value}`
    );
    return sortOrder === value;
  };

  //   useEffect(() => {}, [searchParams]);

  useEffect(() => {
    // updates the respective radio buttons to be checked
    checkedStatus(sortOrder);

    if (sortOrder) {
      //   searchParams.has("order")
      //     ? searchParams.set("order", sortOrder)
      //     : searchParams?.append("order", sortOrder);
      updateProjects(
        setProjects(sortItems(projects, sortFuncByPara(sortParam), sortOrder))
      );
      console.log(projects);
    } else {
      updateProjects(setProjects(allProjects));
      //   searchParams?.delete("order");
    }
    // checkedStatus(sortOrder);
    // setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder, sortParam]);

  return (
    <div class="flex flex-row items-center space-x-2">
      <Icon icon={ICONS.xmark} onClick={() => resetSort()}></Icon>
      <p>Sort projects by "{sortParam}" in </p>
      <div class="form-control flex flex-row">
        <label class="label cursor-pointer w-fit space-x-2">
          <input
            type="radio"
            name="radio-10"
            value={1}
            // eslint-disable-next-line eqeqeq
            checked={sortOrder == 1}
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
            // eslint-disable-next-line eqeqeq
            checked={sortOrder == -1}
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
