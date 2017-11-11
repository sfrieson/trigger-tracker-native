import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../config';

export default function AnalysisScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Analysis</Text>
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
  logo: {
    color: colors.primary,
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
