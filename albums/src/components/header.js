import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {text, view} = styles;

  return (
    <View style={view}>
      <Text style={text}>Albums!</Text>
    </View>
  );
};

const styles = {
  view: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
  },
};

export default Header;
