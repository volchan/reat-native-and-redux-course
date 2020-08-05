import React, { useContext, useState } from "react";

import { Context } from "../context/BlogContext";
import BlogPostForm from"../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      labels={{
        title: "Enter Title:",
        content: "Enter Content:",
        button: "ADD BLOG POST",
      }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default CreateScreen;
