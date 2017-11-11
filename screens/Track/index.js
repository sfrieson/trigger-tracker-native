/* @flow */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import WelcomeScreen from './screens/Welcome';
import { colors, fonts } from '../../config';

export default function TrackScreen (props) {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.recordBox} onPress={() => navigate('Form', {type: 'Record'})}>
          <Text style={styles.heading}>Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reportBox} onPress={() => navigate('Form', {type: 'Report'})}>
        <Text style={styles.heading}>Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const box = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recordBox: {
    ...box,
    backgroundColor: colors.record
  },
  reportBox: {
    ...box,
    backgroundColor: colors.report
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
