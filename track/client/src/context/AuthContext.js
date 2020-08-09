import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add_error":
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post("/signup", { email, password });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: "add_error", payload: "Something went wrong." });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // TODO try to sign in
    // TODO handle success by updating state
    // TODO handle error by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // TODO just sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: "" }
);
