/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "./logo.svg";
import "./dist/tailwind-app.css";
import "./index.css";
import Avatar from "./images/gh_profile_small.png";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img class="avatar-img" src={Avatar} />
        <ul class="tab-panel">
          <li class="tab-item text-red-600">
            <a href="#"> Write </a>
          </li>
          <li class="tab-item">
            <a href="#"> Code </a>
          </li>
          <li class="tab-item">
            <a href="#"> Photograph </a>
          </li>
          {/* <li><a href="#"> </a></li> */}
        </ul>
      </header>
      <Footer />
    </div>
  );
}

export default App;
