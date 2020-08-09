import AsyncStorage from "@react-native-community/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "signin":
      return { token: payload, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signup", { email, password });
    const { token } = res.data;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something went wrong." });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signin", { email, password });
    const { token } = res.data;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "add_error", payload: err.response.data.error });
  }
};

const tryAutoSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryAutoSignin },
  { token: null, errorMessage: "" }
);
