import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';

import {Button, Card, CardSection, Input} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  async onButtonPress() {
    const {email, password} = this.state;
    const auth = firebase.auth;
    await auth.signInWithEmailAndPassword(email, password).catch(async () => {
      await auth.createWithEmailAndPassword(email, password).catch(() => {
        this.setState({error: 'Authentication Failed.'});
      });
    });
  }

  render() {
    const {email, password} = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email:"
            value={email}
            placeholder="user@gmail.com"
            onChangeText={(newEmail) => this.setState({email: newEmail})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password:"
            value={password}
            placeholder="password"
            secureTextEntry
            onChangeText={(newPassword) =>
              this.setState({password: newPassword})
            }
          />
        </CardSection>

        {this.state.error ? (
          <Text style={styles.errorText}>{this.state.error}</Text>
        ) : null}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
