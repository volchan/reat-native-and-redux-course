import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <FontAwesome5 name="search" size={24} color="black" />
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  }
});

export default SearchBar;
