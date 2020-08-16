import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 10,
  },
  text: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default Button;
