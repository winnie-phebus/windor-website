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
import Header from "./Header";

function App() {
  return (
    <div class="">
      <BrowserRouter>
        <Header />
        <div class="md:flex md:flex-row">
          <Navbar />
          <main class="w-auto bg-[#ffffff] p-1 text-center mb-3 md:mx-3 after:md:text-left">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
