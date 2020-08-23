import React, {Component} from 'react';
import {TextInput, View} from 'react-native';

import {Button, Card, CardSection} from './commons';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={styles.input} />
        </CardSection>

        <CardSection>
          <TextInput style={styles.input} />
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
