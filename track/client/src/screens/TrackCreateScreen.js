// import "../_mockLocation";

import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import Map from "../components/Map";
import Container from "../components/Container";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location.coords);
          addLocation(location);
        }
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <Container>
      <Text h3 style={{ fontSize: 48, textAlign: "center" }}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
    </Container>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
