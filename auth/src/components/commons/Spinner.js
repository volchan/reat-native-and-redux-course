import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator
        size={size || 'large'}
        style={styles.toto}
        color="#007AFF"
      />
    </View>
  );
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
};

export {Spinner};
