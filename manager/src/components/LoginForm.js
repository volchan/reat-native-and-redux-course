import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  _onChangeEmail(text) {}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this._onChangeEmail.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input label="Password" placeholder="*********" secureTextEntry />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
