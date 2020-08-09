import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up that email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if sign up fails, we probably need to reflect an error message
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle success by updating state
    // handle error by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // just sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
