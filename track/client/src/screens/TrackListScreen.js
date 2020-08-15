import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state: tracks, fetchTracks } = useContext(TrackContext);
  console.log(tracks);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Spacer />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TouchableOpacity>
          <ListItem chevron title={item.name} />
        </TouchableOpacity>}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
