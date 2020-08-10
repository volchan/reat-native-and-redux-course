import AsyncStorage from "@react-native-community/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const locationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addRecording = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addRecording },
  { recording: false, locations: [], currentLocation: null }
);
