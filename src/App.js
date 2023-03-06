/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "./logo.svg";
import "./App.css";
import Avatar from "./images/gh_profile_small.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Avatar} />
        <ul>
          <li>
            <a href="#"> Write </a>
          </li>
          <li>
            <a href="#"> Code </a>
          </li>
          <li>
            <a href="#"> Photograph </a>
          </li>
          {/* <li><a href="#"> </a></li> */}
        </ul>
      </header>
    </div>
  );
}

export default App;
