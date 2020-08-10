import "../_mockLocation";

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { requestPermissionsAsync } from "expo-location";

import Map from "../components/Map";
import Container from "../components/Container";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
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
