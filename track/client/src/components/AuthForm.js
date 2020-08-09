import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text style={{ textAlign: "center" }} h3>
          {headerText}
        </Text>

        <Spacer />

        <Input
          label="Email"
          placeholder="email@address.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{
            type: "font-awesome-5",
            name: "envelope",
            solid: true,
            color: "#86939E",
          }}
          containerStyle={styles.inputContainer}
        />
        <Input
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          leftIcon={{
            type: "font-awesome-5",
            name: "lock",
            solid: true,
            color: "#86939E",
          }}
          containerStyle={styles.inputContainer}
        />

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
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

export default AuthForm;
