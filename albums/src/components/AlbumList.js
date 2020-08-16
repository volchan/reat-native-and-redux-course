import React, {Component} from 'react';
import {Text, View} from 'react-native';

class AlbumList extends Component {
  UNSAFE_componentWillMount() {
    console.log('component album list will mount');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

const styles = {};

export default AlbumList;
