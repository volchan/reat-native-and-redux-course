import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add_blogpost":
      const { title, content } = payload;

      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: payload.title,
          content: payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [{ id: 123456, title: "TEST POST", content: "TEST CONTENT" }]
);
