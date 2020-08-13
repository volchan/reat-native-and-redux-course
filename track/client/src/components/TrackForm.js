import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import Spacer from "./Spacer";

const TrackForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [name, setName] = useState("");

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.inputContainer}
        />

        <Button
          title="Start Recording"
          onPress={() => console.log("Start Recording")}
        />

        <Spacer />

        <Button
          title="Stop Recording"
          onPress={() => console.log("Stop Recording")}
        />
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
