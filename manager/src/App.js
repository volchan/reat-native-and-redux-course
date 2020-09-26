import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

import reducers from './reducers/index';

class App extends Component {
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: 'AIzaSyDBBdB1V83n1tVKWbKWaPqymw5iES4gIwA',
        authDomain: 'manager-39c2a.firebaseapp.com',
        databaseURL: 'https://manager-39c2a.firebaseio.com',
        projectId: 'manager-39c2a',
        storageBucket: 'manager-39c2a.appspot.com',
        messagingSenderId: '773557487345',
        appId: '1:773557487345:web:5ceed9191c00ad937ecb50',
      };
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
