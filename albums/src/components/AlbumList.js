import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};

  async UNSAFE_componentWillMount() {
    const {data} = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    this.setState({albums: data});
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

const styles = {};

export default AlbumList;
