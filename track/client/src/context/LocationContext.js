import AsyncStorage from "@react-native-community/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const locationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add_current_location":
      return { ...state, currentLocation: payload };
    case "record_location":
      return { ...state, locations: [...state.locations, payload] };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "change_name":
      return { ...state, name: payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () =>
  dispatch({ type: "start_recording" });
const stopRecording = (dispatch) => () => dispatch({ type: "stop_recording" });
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  if (recording) dispatch({ type: "record_location", location });
};
const changeName = (dispatch) => (name) =>
  dispatch({ type: "change_name", payload: name });

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { recording: false, locations: [], currentLocation: null, name: "" }
);
