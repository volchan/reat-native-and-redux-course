import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: false};
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

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({loggedIn: true});
        } else {
          this.setState({loggedIn: false});
        }
      });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header title="Authentication" />
        <LoginForm />
        <Text>{this.state.loggedIn ? 'true' : 'false'}</Text>
      </SafeAreaView>
    );
  }
}

export default App;
