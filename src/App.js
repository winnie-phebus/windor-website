/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./dist/tailwind-app.css";
import "./index.css";
// import Avatar from "./images/gh_profile_small.png";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container-fluid flex-row px-5 sm:flex-col-reverse">
        <button class="my-2 w-full bg-green-800 p-2 text-white sm:float-right sm:mx-2 sm:w-auto">
          Donate?
        </button>
        <div
          dir="ltr"
          class="container-fluid float-left mx-auto w-full bg-slate-100 p-5 text-black sm:w-5/6">
          <img
            class="float-left mb-1.5 me-3.5 inline-flex h-1/3 w-1/3 border-red-300 hover:me-5 hover:rounded-ss-3xl hover:border-4"
            src="http://localhost:3000/static/media/gh_profile_small.1d05805f7726a39d77a3.png"
          />
          <h2 class="-mt-2 mb-1 text-lg font-semibold tracking-widest">
            Hello There! I'm Winn.
          </h2>
          <p class="whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
            purus faucibus ornare suspendisse sed nisi. Dolor sit amet
            consectetur adipiscing. Quisque sagittis purus sit amet volutpat
            consequat. Vitae turpis massa sed elementum tempus. Ac odio tempor
            orci dapibus ultrices in iaculis nunc. A pellentesque sit amet
            porttitor eget dolor. Tincidunt lobortis feugiat vivamus at. Proin
            libero nunc consequat interdum varius sit amet mattis vulputate. Dui
            id ornare arcu odio ut sem nulla. Nibh nisl condimentum id venenatis
            a condimentum. In pellentesque massa placerat duis ultricies lacus
            sed turpis tincidunt. Vestibulum lorem sed risus ultricies
            tristique. Odio eu feugiat pretium nibh.
          </p>
          <p class="text-md mt-2 whitespace-pre-line font-semibold">
            Welcome to windorland. I hope you enjoy your stay.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
