import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const COLOR_INCERMENT = 5;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +5, -5
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCERMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCERMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCERMENT)}
        onDecrease={() => setGreen(green - COLOR_INCERMENT)}
      />
      <ColorCounter
        color="Bleu"
        onIncrease={() => setBlue(blue + COLOR_INCERMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCERMENT)}
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
