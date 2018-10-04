import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootRouter from './router/RootRouter';

export default class App extends React.Component {
  render() {
    return (
      <RootRouter />
    );
  }
}