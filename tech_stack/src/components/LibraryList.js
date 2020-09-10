import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
  render() {
    return (
      <>
        {this.props.libraries.map((el) => (
          <Text>{el.title}</Text>
        ))}
      </>
    );
  }
}

const mapStateToProps = ({libraries}) => ({libraries});

export default connect(mapStateToProps)(LibraryList);
