import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// import WelcomeScreen from './screens/Welcome';
import { colors, fonts } from '../../config'

export default class TrackScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Track',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../assets/icon-track-2x.png')} style={[styles.icon, {tintColor}]} />
    )
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.recordBox} onPress={() => navigate('Form', {type: 'Record'})}>
          <Text style={styles.heading}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportBox} onPress={() => navigate('Form', {type: 'Report'})}>
          <Text style={styles.heading}>Report</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const box = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}
const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  icon: {
    width: 26,
    height: 26
  }
})
