import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state: tracks } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const { name, locations } = tracks.find((el) => el._id === _id);
  const initialCoords = locations[0].coords;

  return (
    <>
      <Text style={styles.title}>{name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 48, textAlign: "center" },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
