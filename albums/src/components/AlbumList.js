import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  async UNSAFE_componentWillMount() {
    const res = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    console.log(res.data);
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
