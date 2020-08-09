import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>

        <Spacer />

        <Input
          label="Email"
          placeholder="email@address.com"
          leftIcon={{
            type: "font-awesome-5",
            name: "envelope",
            solid: true,
            color: "#86939E",
          }}
        />
        <Input
          label="Password"
          placeholder="Password"
          secureTextEntry
          leftIcon={{
            type: "font-awesome-5",
            name: "lock",
            solid: true,
            color: "#86939E",
          }}
        />

        <Button title="Sign Up" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
