import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { colors, fonts } from '../../config'

export default class AnalysisScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Analysis',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../assets/icon-analysis-2x.png')} style={[styles.icon, {tintColor}]} />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Analysis</Text>
      </View>
    )
  }
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
  },
  icon: {
    width: 26,
    height: 26
  }
})
