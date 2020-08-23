import React from 'react';
import {TextInput} from 'react-native';

const Input = ({value, onChangeText}) => {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
  );
};

const styles = {
  input: {
    height: 100,
    width: 100,
  },
};

export {Input};
