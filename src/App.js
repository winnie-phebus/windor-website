/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./dist/tailwind-app.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./home";
import Project from "./project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
