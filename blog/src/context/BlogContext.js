import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "get_blogposts":
      return payload;
    case "add_blogpost":
      return [...state, payload];
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: res.data });
  };
};

const addBlogPost = (_dispatch) => {
  return async (title, content, callback) => {
    const res = await jsonServer.post("/blogposts", { title, content });
    if (res.data) {
      // dispatch({ type: "add_blogpost", payload: res.data });
      if (callback) callback();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    console.log(id, title, content, callback);
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost },
  []
);
