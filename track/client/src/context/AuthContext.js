import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
