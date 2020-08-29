import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';

import {Button, Card, CardSection, Input, Spinner} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  _onLoginSuccess() {
    this.setState({email: '', password: '', error: '', loading: false});
  }

  _onLoginFail() {
    this.setState({error: 'Authentication Failed.', loading: false});
  }

  _onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    const auth = firebase.auth();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(this._onLoginSuccess.bind(this))
      .catch(() => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(this._onLoginSuccess.bind(this))
          .catch(this._onLoginFail.bind(this));
      });
  }

  _renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this._onButtonPress.bind(this)}>Log In</Button>;
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

        <CardSection>{this._renderButton()}</CardSection>
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
