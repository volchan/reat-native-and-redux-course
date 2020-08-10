import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const Container = ({ children, style }) => {
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ ...styles.container, ...style }}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Container;
