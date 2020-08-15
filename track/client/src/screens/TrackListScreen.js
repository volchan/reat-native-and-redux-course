import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";
import Container from "../components/Container";

const TrackListScreen = ({ navigation }) => {
  const { state: tracks, fetchTracks } = useContext(TrackContext);

  return (
    <Container>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.title}>TrackListScreen</Text>
      <Spacer />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TrackDetail", { _id: item._id })
            }
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default TrackListScreen;
