import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={name}
          onChangeText={changeName}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.inputContainer}
        />

        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 0,
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginBottom: 15,
  },
});

export default TrackForm;
