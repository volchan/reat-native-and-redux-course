import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import Container from "../components/Container";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <Container>
      <Text style={{ fontSize: 48, textAlign: "center" }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </Container>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
