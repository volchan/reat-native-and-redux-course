import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  _renderItem({item}) {
    return <ListItem library={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={(el) => el.id}
        showsVerticalScrollIndicator={false}
        renderItem={this._renderItem}
      />
    );
  }
}

const mapStateToProps = ({libraries}) => ({libraries});

export default connect(mapStateToProps)(LibraryList);
