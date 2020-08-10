import React from "react";
import MapView from "react-native-maps";
import { Text, StyleSheet } from "react-native";

import Spacer from "../components/Spacer";

const Map = () => {
  return (
    <Spacer>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }} />
    </Spacer>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
