/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./dist/tailwind-app.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./home";
import Project from "./project";
import Resources from "./resources";

{
  /* <div class="container flex-auto flex-row">
  <div>
    <div class="border-b-2 border-lime-500 p-2 text-center md:border-0 md:text-left">
      <h1 class="-my-2 text-4xl font-light lowercase tracking-widest text-lime-500">
        windorland
      </h1>
      <sub class="text-sm font-thin"> Winnie Phebus</sub>
    </div>
    <nav class="w-auto min-w-fit border-b-2 md:w-1/6 md:border-b-0 md:border-r-2 md:border-dotted md:border-lime-600">
      <ul class="space-between flex p-1 font-extralight uppercase md:flex-col md:text-left">
        <li class="p-1">about</li>
        <li class="p-1">resume</li>
        <li class="p-1">contact</li>
      </ul>
    </nav>
  </div>
  <main class="container inline p-1 text-center md:w-5/6 md:text-left">
    Hello!
  </main>
</div>; */
}

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
