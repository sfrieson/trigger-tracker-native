import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../config'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={() => { this.enter() }}>
          <Image style={styles.logo} source={require('../assets/logo-vertical-2x.png')} />
          <Text style={styles.copy}>Tap to Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }

  enter () {
    this.props.navigation.navigate('Main')
  }
}

const styles = StyleSheet.create({
  copy: {
    color: colors.secondary,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 200,
    width: 300
  }
})
