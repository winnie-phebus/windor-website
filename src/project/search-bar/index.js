import React from "@heroicons/react";

export default function Searchbar({ onChange = (f) => {} }) {
  return (
    <input
      class="bg-slate-400 p-2 text-white w-full rounded-md"
      key="search-bar"
      value=""
      placeholder={"search projects"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
