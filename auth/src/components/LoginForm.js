import React, {Component} from 'react';
import {View} from 'react-native';

import {Button, Card, CardSection} from './commons';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection></CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
