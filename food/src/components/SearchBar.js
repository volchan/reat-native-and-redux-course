import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome5 name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  }
});

export default SearchBar;
