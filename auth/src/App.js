import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyB-QKYJj8MsRww7KPFZDvCd8JSsuthcj0Y',
        authDomain: 'react-native-auth-e2769.firebaseapp.com',
        databaseURL: 'https://react-native-auth-e2769.firebaseio.com',
        projectId: 'react-native-auth-e2769',
        storageBucket: 'react-native-auth-e2769.appspot.com',
        messagingSenderId: '750804124671',
        appId: '1:750804124671:web:1ec1be30191422bb4a5dca',
      });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header title="Authentication" />
        <LoginForm />
      </SafeAreaView>
    );
  }
}

export default App;
