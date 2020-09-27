import {EMAIL_CHANGED} from '../actions/types';

const INITIAL_STATE = {email: ''};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case EMAIL_CHANGED:
      return {...state, email: payload};
    default:
      return state;
  }
};
