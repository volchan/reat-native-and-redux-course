import React from 'react';
import {Text, View, Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumList = ({album}) => {
  const {title, artist, image, thumbnail_image} = album;
  const {
    header,
    albumTitle,
    albumCover,
    albumCoverContainer,
    artistName,
    thumbnail,
    thumbnailContainer,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{uri: thumbnail_image}} />
        </View>
        <View style={header}>
          <Text style={albumTitle}>{title}</Text>
          <Text style={artistName}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={albumCoverContainer}>
          <Image style={albumCover} source={{uri: image}} />
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
  albumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  albumCover: {
    borderRadius: 4,
    flex: 1,
  },
  albumCoverContainer: {
    flex: 1,
    height: 400,
  },
  artistName: {
    opacity: 0.5,
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 4,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
};

export default AlbumList;
