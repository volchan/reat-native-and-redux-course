import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Stéphane";
  return (
    <View>
      <Text style={style.titleStyle}>Getting started with React native!</Text>
      <Text style={style.textStyle}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
