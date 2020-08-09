import React from "react";
import { Text , TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName, style }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={{...style, ...styles.link}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#007bff",
  },
});

export default withNavigation(NavLink);