import "../_mockLocation";

import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";

import Map from "../components/Map";
import Container from "../components/Container";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording]);
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <Container>
      <Text h3 style={{ fontSize: 48, textAlign: "center" }}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
      <TrackForm />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
