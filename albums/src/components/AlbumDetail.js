import React from 'react';
import {Text, View, Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumList = ({album}) => {
  return (
    <Card>
      <CardSection>
        <View></View>
        <View style={styles.header}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default AlbumList;
