import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const COLOR_INCREMENT = 5;

const reducer = (state, action) => {
  // state === { red: Number, green: Number, blue: Number }
  // action == { type: 'change_red' || 'change_green' || 'change_blue', payload: +5 || -5 }
  const { red, green, blue } = state;
  const { type, payload } = action;
  switch (type) {
    case "change_red":
      return red + payload < 0 || red + payload > 255
        ? state
        : { ...state, red: red + payload };
    case "change_green":
      return green + payload < 0 || green + payload > 255
        ? state
        : { ...state, green: green + payload };
    case "change_blue":
      return blue + payload < 0 || blue + payload > 255
        ? state
        : { ...state, blue: blue + payload };
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
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Bleu"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
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
