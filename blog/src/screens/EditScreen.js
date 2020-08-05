import React, { useContext, useState } from "react";

import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPostId = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return <BlogPostFrom />;
};

const styles = StyleSheet.create({});

export default EditScreen;
