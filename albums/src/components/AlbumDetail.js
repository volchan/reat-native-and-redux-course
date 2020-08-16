import React from 'react';
import {Text} from 'react-native';

import Card from './Card';

const AlbumList = ({album}) => {
  return (
    <Card>
      <Text>{album.title}</Text>
    </Card>
  );
};

const styles = {};

export default AlbumList;
