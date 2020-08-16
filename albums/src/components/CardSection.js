import React from 'react';
import {View} from 'react-native';

const CardSection = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative',
  },
};

export default CardSection;
