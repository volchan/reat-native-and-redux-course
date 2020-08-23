import React, {Component} from 'react';
import {TextInput} from 'react-native';

import {Button, Card, CardSection} from './commons';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
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
