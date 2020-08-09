import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (<>
    <Text style={{ fontSize: 48 }}>SignupScreen</Text>
    <Button title="Go to Signin" onPress={() => navigation.navigate("Signin")} />
    <Button title="Go to main flow" onPress={() => navigation.navigate("mainFlow")} />
  </>);
};

const styles = StyleSheet.create({});

export default SignupScreen;
