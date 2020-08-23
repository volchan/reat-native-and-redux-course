import React, {Component} from 'react';
import {Icon, TextInput} from 'react-native';

import {Button, Card, CardSection} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;

    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(newEmail) => this.setState({email: newEmail})}
          />
        </CardSection>

        <CardSection>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(newPassword) =>
              this.setState({password: newPassword})
            }
          />
        </CardSection>

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  input: {
    height: 20,
    width: 100,
  },
};

export default LoginForm;
