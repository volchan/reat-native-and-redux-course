import React, {Component} from 'react';
import {Text} from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.title}</Text>
      </>
    );
  }
}

export default ListItem;
