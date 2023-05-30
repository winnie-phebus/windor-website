import React from "@heroicons/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="container-fluid mx-auto flex flex-row items-center justify-between space-x-5  bg-slate-500 p-3">
      <span class="basis-1/2 self-stretch bg-slate-300/25 p-2 font-semibold tracking-wider text-red-300 hover:italic">
        <Link to="/">windorland</Link>
      </span>
      <div class="container-fluid flex basis-1/4 space-x-2 justify-evenly bg-black/20">
        <button class="bg-red-900 p-1.5 text-red-100">
          {" "}
          <Link to="/projects">Projects</Link>
        </button>
        <button class="bg-red-900 p-1.5 text-red-100">
          <Link to="/resources">Resources</Link>
        </button>
      </div>
    </div>
  );
}
