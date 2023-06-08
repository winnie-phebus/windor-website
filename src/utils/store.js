import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./reducers";

export default configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
