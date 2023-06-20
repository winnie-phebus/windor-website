import React, { useState } from "react";
import Searchbar from ".";
import Sort from "./sort";
import Filter from "./filter";

// flow of logic / priorites : Searchbar + Keyterm (all projects) -> Filter (sk projects) -> Sort (filtered projects) -> Display (sorted projects)
// prev logic flow may be unnecessary due to state - I'll see how the UI works all together, but still following proposed model for now

export default function AdvancedSearchObject() {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive(!isActive);
  }

  return (
    <div class=" border-base-300  m-0 p-1 ">
      <div class="w-full flex flex-row text-xl p-1 rounded-sm font-medium">
        <Searchbar />
        <button class="mx-1" onClick={() => toggleActive()}>
          {isActive ? (
            // {/* TODO: move to UTIL for Icons? */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            // {/* TODO: move to UTIL for Icons? */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
      </div>
      {isActive && (
        <div class="divide-y-2 space-y-2 bg-slate-100 m-1 p-1 rounded-md">
          <Sort />
          <Filter />
        </div>
      )}
    </div>
  );
}
