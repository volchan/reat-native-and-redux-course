import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state: tracks } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = tracks.find((el) => el._id === _id);

  return <Text style={styles.title}>{track.name}</Text>;
};

const styles = StyleSheet.create({
  title: { fontSize: 48, textAlign: "center" },
});

export default TrackDetailScreen;
