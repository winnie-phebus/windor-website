import React, { useState, useEffect } from "react";

// TODO: add inclusion / exclusion variables? AND / OR?
export default function Filter() {
  const filterListItems = ["git", "app", "api", "android studio"];
  const [filterParams, setFilterParams] = useState([]);

  useEffect(() => {
    console.log(`filterParams: ${filterParams}`);
  }, [filterParams]);

  const filterOnChange = (checkStatus, checkValue) => {
    if (checkStatus) {
      setFilterParams(() => [...filterParams, checkValue]);
    } else {
      setFilterParams(() =>
        filterParams.filter((param) => param !== checkValue)
      );
    }
  };

  return (
    <div class="flex flex-col">
      <p>Filter placeholder!</p>
      <div class="form-control flex">
        {filterListItems.map((item) => (
          <label key={item} class="flex label cursor-pointer w-fit space-x-2">
            <input
              type="checkbox"
              class="checkbox"
              value={item}
              onChange={(e) => {
                filterOnChange(e.target.checked, e.target.value);
              }}
            />
            <span class="label-text">{item.toUpperCase()}</span>
          </label>
        ))}
        {filterParams.map((param) => (
          <p>{param}</p>
        ))}
      </div>
    </div>
  );
}
