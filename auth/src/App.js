import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Header} from './components/commons';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header title="Authentication" />
        <Text>Hello World!</Text>
      </SafeAreaView>
    );
  }
}

export default App;
