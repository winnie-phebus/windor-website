import React, { useState } from "react";
import Searchbar from ".";
import Sort from "./sort";
import Filter from "./filter";
import Icon from "../../utils/components/icon";
import { ICONS } from "../../utils/constants";

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
            <Icon icon={ICONS.double_chevron_up} />
          ) : (
            <Icon icon={ICONS.double_chevron_down} />
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
