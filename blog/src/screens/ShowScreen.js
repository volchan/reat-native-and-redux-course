import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPostId = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
