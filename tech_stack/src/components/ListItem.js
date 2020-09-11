import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const {library, selectLibrary} = this.props;
    const {id, title} = library;
    const {titleStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default connect(null, actions)(ListItem);
