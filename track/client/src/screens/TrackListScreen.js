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
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
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
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks"
};

const styles = StyleSheet.create();

export default TrackListScreen;
