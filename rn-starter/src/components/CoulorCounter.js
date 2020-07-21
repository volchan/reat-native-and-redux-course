import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`}></Button>
      <Button title={`Decrease ${color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
