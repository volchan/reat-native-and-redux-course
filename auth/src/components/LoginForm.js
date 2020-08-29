import React, {Component} from 'react';
import firebase from 'firebase';

import {Button, Card, CardSection, Input} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onButtonPress() {
    const {email, password} = this.state;
    firebase.auth.signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
