import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
