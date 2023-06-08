import { createSlice } from "@reduxjs/toolkit";
import projects from "../project/projects.json";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    value: projects,
  },
  reducers: {
    initProjects: (state = this) => {
      state.value = projects;
      console.log(`state: ${state.value}`);
    },
    setProjects: (state = this.initialState, action) => {
      console.log(`state: ${state.value}, payload: ${action.payload}`);
      state.value = action.payload;
    },
  },
});

export const { initProjects, setProjects } = projectsSlice.actions;
export const selectProjects = (state) => state.projects.value;
export const allProjects = projects;

export default projectsSlice.reducer;
