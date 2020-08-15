import createDataContext from "./createDataContext";

import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fetch_tracks":
      return payload
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const res = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: res.data });
};
const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
