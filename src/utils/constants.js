// making it possible for all components to access the same path vars / make customizations easier
export const PATHS = {
  HOME: "/",
  PROJECT: "/project",
  PROJECT_ID: "/project/:id",
  SEARCH_KEY: "q",
  FILTER_KEY: "f",
  SORT_CAT_KEY: "s",
  SORT_ORDER_KEY: "o",
};

// the paths for the HeroIcons I use throughout
export const ICONS = {
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  xmark: "M6 18L18 6M6 6l12 12",
  double_chevron_up: "M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5",
  double_chevron_down: "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5",
};
