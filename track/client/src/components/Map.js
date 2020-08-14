import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Text, StyleSheet, ActivityIndicator } from "react-native";

import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations, recording },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
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
      >
        <Circle
          center={currentLocation.coords}
          radius={15}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
      </MapView>
      <Text>Latitude: {currentLocation.coords.latitude}</Text>
      <Text>Longitude: {currentLocation.coords.longitude}</Text>
      <Text>Recording: {recording.toString()}</Text>
      <Text>Recorded locations: {locations.length}</Text>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
