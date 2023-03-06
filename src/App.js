/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "./logo.svg";
import "./dist/tailwind-app.css";
import Avatar from "./images/gh_profile_small.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="avatar-img" src={Avatar} />
        <ul class="tab-panel">
          <li class="tab-item">
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
    </div>
  );
}

export default App;
