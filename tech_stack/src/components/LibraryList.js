import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
  _renderItem({item}) {
    return (
      <>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.title}</Text>
      </>
    );
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
