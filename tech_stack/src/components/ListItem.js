import React, {Component} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  UNSAFE_componentWillUpdate() {
    LayoutAnimation.spring();
  }

  _renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.description}>{library.description}</Text>
        </CardSection>
      );
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
  titleStyle: {fontSize: 18, paddingLeft: 15},
  description: {flex: 1, paddingHorizontal: 20, paddingVertical: 10},
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
