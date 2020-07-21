import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
      />
      <ColorCounter
        color="Bleu"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
      />
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
