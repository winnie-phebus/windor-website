import React from "react";
import Searchbar from ".";

// TODO: consider different methods for toggling the extra info, I don't like the arrow functionality rn
export default function AdvancedSearchObject() {
  return (
    <div tabindex="0" class="collapse-arrow border-base-300 collapse m-0">
      <div class="collapse-title text-xl font-medium">
        <Searchbar />
      </div>
      <div class="collapse-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>
  );
}
