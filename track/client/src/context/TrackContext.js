import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch = () => {});
const createTrack = (dispatch = () => {});

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
