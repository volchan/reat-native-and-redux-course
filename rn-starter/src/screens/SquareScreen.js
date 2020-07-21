import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const COLOR_INCREMENT = 5;

const reducer = (state, action) => {
  // state === { red: Number, green: Number, blue: Number }
  // action == { colorToChange: 'red' || 'green' || 'blue', amount: +5 || -5 }
  const { red, green, blue } = state;
  switch (action.colorToChange) {
    case "red":
      return red + action.amount < 0 || red + action.amount > 255
        ? state
        : { ...state, red: red + action.amount };
    case "green":
      return green + action.amount < 0 || green + action.amount > 255
        ? state
        : { ...state, green: green + action.amount };
    case "blue":
      return blue + action.amount < 0 || blue + action.amount > 255
        ? state
        : { ...state, blue: blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Bleu"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
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
