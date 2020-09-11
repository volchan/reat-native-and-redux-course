import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView style={styles.containerStyle}>
        <Header title="Tech Stack" />
        <LibraryList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default App;
