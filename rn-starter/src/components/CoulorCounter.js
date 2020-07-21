import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}></Button>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
