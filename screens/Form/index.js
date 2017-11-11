import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Form extends Component {
  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>{params.type}</Text>
      </View>
    )
  }
}
