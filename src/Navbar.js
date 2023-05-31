import React from "@heroicons/react";
import { Link } from "react-router-dom";

/*  <div class="container-fluid mx-auto flex flex-row items-center justify-between space-x-5  bg-slate-500 p-3">
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
    </div> */

export default function Navbar() {
  return (
    <nav class="w-auto min-w-fit h-fit border-b-2 md:w-2/6 md:border-b-0 md:border-r-2 md:border-dotted md:border-lime-600">
      <ul class="space-between flex justify-around px-1 font-extralight uppercase md:flex-col md:text-left">
        <li class="p-1">about</li>
        <li class="p-1 hover:tracking-widest">
          <Link to="/projects">resume</Link>
        </li>
        <li class="p-1">contact</li>
      </ul>
    </nav>
  );
}
