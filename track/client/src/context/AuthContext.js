import AsyncStorage from "@react-native-community/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "signup":
      return { token: payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signup", { email, password });
    const { token } = res.data;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signup", payload: { token } });
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something went wrong." });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  // TODO try to sign in
  // TODO handle success by updating state
  // TODO handle error by showing error message (somehow)
};

const signout = (dispatch) => () => {
  // TODO just sign out
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
