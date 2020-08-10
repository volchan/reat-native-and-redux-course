import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import Map from "../components/Map";
import Container from "../components/Container";

const TrackCreateScreen = () => {
  return <Container>
    <Text h3 style={{ fontSize: 48, textAlign: "center" }}>Create a Track</Text>
    <Map />
  </Container>;
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
