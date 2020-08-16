import React from 'react';
import {AppRegistry} from 'react-native';

import Header from './src/components/header';

const App = () => <Header title="Albums" />;

AppRegistry.registerComponent('albums', () => App);
