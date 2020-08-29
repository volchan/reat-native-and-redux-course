import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';

import {Button, Card, CardSection, Input, Spinner} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: true,
  };

  async onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    const auth = firebase.auth();
    await auth.signInWithEmailAndPassword(email, password).catch(async () => {
      await auth.createUserWithEmailAndPassword(email, password).catch(() => {
        this.setState({error: 'Authentication Failed.'});
      });
    });
    this.setState({loading: false});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
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

        <CardSection>{this.renderButton()}</CardSection>
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
