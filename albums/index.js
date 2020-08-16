import React from 'react';
import {AppRegistry} from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <Header title="Albums" />
      <AlbumList />
    </>
  );
};

AppRegistry.registerComponent('albums', () => App);
