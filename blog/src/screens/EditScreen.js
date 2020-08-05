import React, { useContext } from "react";

import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPostId = navigation.getParam("id");
  const { id, title, content } = state.find(
    (blogPost) => blogPost.id === blogPostId
  );

  return (
    <BlogPostFrom
      initialValues={{ title, content }}
      labels={{
        title: "Edit Title:",
        content: "Edit Content:",
        button: "EDIT BLOG POST",
      }}
      onSubmit={(id, title, content) => editBlogPost(id, title, content)}
    />
  );
};

export default EditScreen;
