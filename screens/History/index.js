import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import api from '../../api'
import { colors, fonts } from '../../config'

export default class HistoryScreen extends React.Component {
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
  }
})
