import React from 'react'
import { View, Text } from 'react-native'

import Input from '../../components/Input'

export default class Form extends React.Component {
  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>{params.type}</Text>
        <Input />
      </View>
    )
  }
}
