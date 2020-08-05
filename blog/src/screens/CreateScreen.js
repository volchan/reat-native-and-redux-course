import React, { useContext, useState } from "react";

import { Context } from "../context/BlogContext";
import BlogPostForm from"../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return <BlogPostForm />;
};

export default CreateScreen;
