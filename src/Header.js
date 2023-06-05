import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="border-b-2 border-lime-500 p-3 pt-4 text-center md:border-0 md:text-left">
      <h1 class="-my-2 text-5xl font-light lowercase tracking-widest text-lime-500 hover:uppercase">
        <Link to="/">windorland</Link>
      </h1>
      <sub class="text-sm font-thin">Winnie Phebus</sub>
    </div>
  );
}
