import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import { colors } from '../../config'

export default class Input extends React.Component {
  render () {
    return (
      <View>
        <Text>Input</Text>
        <TextInput style={styles.input} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderColor: colors.text,
  }
})
