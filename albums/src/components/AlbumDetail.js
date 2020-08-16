import React from 'react';
import {Text, View, Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumList = ({album}) => {
  const {title, artist, image, thumbnail_image} = album;
  const {header, thumbnail} = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnail} source={{uri: thumbnail_image}} />
        </View>
        <View style={header}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
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
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 4,
    marginRight: 5,
  },
};

export default AlbumList;
