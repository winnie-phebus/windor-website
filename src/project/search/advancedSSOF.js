import React from "react";
import Searchbar from ".";
import Sort from "./sort";

// flow of logic / priorites : Searchbar + Keyterm (all projects) -> Filter (sk projects) -> Sort (filtered projects) -> Display (sorted projects)
// prev logic flow may be unnecessary due to state - I'll see how the UI works all together, but still following proposed model for now

// TODO: consider different methods for toggling the extra info, I don't like the arrow functionality rn
export default function AdvancedSearchObject() {
  return (
    <div tabindex="0" class="collapse-arrow border-base-300 collapse m-0">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        <Searchbar />
      </div>
      <div class="collapse-content">
        <Sort />
        <p>Filter placeholder</p>
      </div>
    </div>
  );
}
