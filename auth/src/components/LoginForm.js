import React, {Component} from 'react';

import {Button, Card, CardSection, Input} from './commons';

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
          <Input
            label="Email:"
            value={email}
            onChangeText={(newEmail) => this.setState({email: newEmail})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password:"
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

export default LoginForm;
