import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const COLOR_INCREMENT = 5;

const reducer = (state, action) => {
  // state === { red: Number, green: Number, blue: Number }
  // action == { colorToChange: 'red' || 'green' || 'blue', amount: +5 || -5 }

  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorCounter color="Red" onIncrease={() => ""} onDecrease={() => ""} />
      <ColorCounter color="Green" onIncrease={() => ""} onDecrease={() => ""} />
      <ColorCounter color="Bleu" onIncrease={() => ""} onDecrease={() => ""} />
      <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
