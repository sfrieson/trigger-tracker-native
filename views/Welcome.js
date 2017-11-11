/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../config';

export default function WelcomeScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.copy}>Welcome</Text>
      <Text style={styles.logo}>TriggerTracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  copy: {
    color: colors.text
  },
  logo: {
    color: colors.primary,
    fontFamily: 'sans-serif',
    fontSize: '2em'
  }
});