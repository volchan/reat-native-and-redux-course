import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import ColorCounter from "../components/CoulorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Bleu" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
