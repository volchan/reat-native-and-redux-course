import React from 'react';
import {Text} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumList = ({album}) => {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {};

export default AlbumList;
