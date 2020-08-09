import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Container from "../components/Container";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <Container style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account ? Sign Up instead!"
        style={{ marginHorizontal: 15 }}
      />
    </Container>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SigninScreen;
