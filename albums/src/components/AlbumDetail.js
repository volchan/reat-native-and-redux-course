import React from 'react';
import {Text, View} from 'react-native';

const AlbumList = ({album}) => {
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

const styles = {};

export default AlbumList;
