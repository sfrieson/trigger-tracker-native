import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native'

import { styles as inputStyles } from './'

export default class Tags extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {current: ''}
  }
  render () {
    return (
      <View>
        <View style={styles.tagsContainer}>
          {this.props.defaultValue.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </View>
        <TextInput
          blurOnSubmit={false}
          onChangeText={(text) => this.setState({current: text})}
          onSubmitEditing={() => {
            this.props.onChange(this.props.name, [...this.props.defaultValue, this.state.current.trim()])
            this.setState({current: ''})
          }}
          style={inputStyles.input}
          value={this.state.current}
        />
      </View>
    )
  }
}

function Tag (props) {
  return (
    <TouchableHighlight style={styles.tag}>
      <Text>{props.children}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  tag: {
    alignItems: 'flex-start',
    backgroundColor: 'lightblue',
    flexWrap: 'wrap',
    padding: 3,
    margin: 3
  },
  tagsContainer: {
    flexDirection: 'row'
  }
})
