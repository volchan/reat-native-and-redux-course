import React, {Component} from 'react';
import {connect} from 'react-redux';

import {emailChanged, passwordChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  _onChangeEmail(text) {
    this.props.emailChanged(text);
  }

  _onChangePassword(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this._onChangeEmail.bind(this)}
            value={this.props.email}
            />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="*********"
            secureTextEntry
            onChangeText={this._onChangePassword.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({auth: {email, password}}) => {
  return {email: email, password: password};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(
  LoginForm,
);
