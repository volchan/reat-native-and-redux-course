import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Albums" />
      <AlbumList />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent('albums', () => App);
