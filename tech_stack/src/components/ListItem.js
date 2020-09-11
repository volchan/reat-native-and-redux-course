import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  _renderDescription() {
    const {
      library: {id, description},
      selectedLibraryId,
    } = this.props;
    if (id === selectedLibraryId) {
      return <Text>{description}</Text>;
    }
  }

  render() {
    const {
      library: {id, title},
      selectLibrary,
    } = this.props;
    const {titleStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this._renderDescription()}
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

const mapStateToProps = (state) => {
  return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);
