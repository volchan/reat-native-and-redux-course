import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title }) => {
  return (
    <View>
      <Image source={require("../../assets/beach.jpg")} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
