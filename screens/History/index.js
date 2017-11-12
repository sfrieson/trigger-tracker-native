import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import api from '../../api'
import { colors, fonts } from '../../config'

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'History',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../assets/icon-history-2x.png')} style={[styles.icon, {tintColor}]} />
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      items: null
    }
  }
  componentWillMount () {
    api.getHistory()
    .then(items => this.setState({items}))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>History</Text>
        <Text>{!this.state.items ? 'Loading' : this.state.items.length + ' items'}</Text>
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
