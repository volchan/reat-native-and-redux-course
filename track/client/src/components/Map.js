import React, { useContext } from "react";
import MapView, { Polyline } from "react-native-maps";
import { Text, StyleSheet, ActivityIndicator } from "react-native";

import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <Text>Latitude: {currentLocation.coords.latitude}</Text>
      <Text>Longitude: {currentLocation.coords.longitude}</Text>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
