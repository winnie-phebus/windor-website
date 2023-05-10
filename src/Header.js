import React from "@heroicons/react";
// import { Button } from "@material-ui/core";

export default function Header() {
  return (
    <div class="container-fluid mx-auto flex flex-row items-center justify-between space-x-5  bg-slate-500 p-5">
      <span class="basis-1/2 self-stretch bg-slate-300/25 p-4 font-semibold tracking-wider text-red-300 hover:italic">
        windorland
      </span>
      <div class="container-fluid flex basis-1/4 space-x-2 justify-evenly bg-black/20">
        <button class="bg-red-900 p-1.5 text-red-100">Projects</button>
        <button class="bg-red-900 p-1.5 text-red-100">Resume</button>
      </div>
    </div>
  );
}
