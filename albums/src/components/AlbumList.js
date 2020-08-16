import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};

  async UNSAFE_componentWillMount() {
    const {data} = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    this.setState({albums: data});
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}

const styles = {};

export default AlbumList;
