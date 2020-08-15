import createDataContext from "./createDataContext";

import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
