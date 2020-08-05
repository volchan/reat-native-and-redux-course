import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPostId = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation: { navigate, getParam } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigate("Edit", { id: getParam("id") })
        }
      >
        <FontAwesome5 name="pencil-alt" style={styles.editIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    fontSize: 20,
    color: "black",
    marginRight: 15,
  },
});

export default ShowScreen;
