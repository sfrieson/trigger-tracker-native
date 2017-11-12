import React from 'react'
import PropTypes from 'prop-types'
import { Picker, StyleSheet, Text, TextInput, View } from 'react-native'

import TagsInput from './Tags'

import { colors } from '../../config'

export default class Input extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    blurOnSubmit: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    returnKeyType: PropTypes.string,
    value: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || ''
    }
  }

  componentWillReceiveProps (nextProps) {
    nextProps.focus && this.focus()
  }

  focus () {
    // this.refs.input.focus()
  }

  render () {
    if (this.props.type === 'text') {
      return (
        <View>
          <Text>{this.props.label}</Text>
          <TextInput
            ref='input'
            autoFocus={this.props.autoFocus}
            blurOnSubmit={this.props.blurOnSubmit}
            onChangeText={(text) => this.setState({value: text})}
            onSubmitEditing={() => {
              this.props.onChange(this.props.name, this.state.value)
            }}
            style={styles.input}
            value={this.props.value}
            returnKeyType={this.props.returnKeyType}
          />
        </View>
      )
    } else if (this.props.type === 'dropdown') {
      return (
        <View>
          <Text>{this.props.label}</Text>
          <Picker
            selectedValue={this.props.defaultValue}
            onValueChange={(itemValue, _itemIndex) => {
              this.props.onChange(this.props.name, itemValue)
            }}
            mode='dropdown'
            ref='input'
            style={styles.twoPickers}
            itemStyle={styles.twoPickerItems}
          >
            {this.props.items.map(item => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      )
    } else if (this.props.type === 'tags') {
      return (
        <View>
          <Text>{this.props.label}</Text>
          <TagsInput
            {...this.props}
            defaultValue={this.props.defaultValue || []}
          />
        </View>
      )
    }
  }
}

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderColor: colors.text
  },
  twoPickers: {
    height: 100,
    borderColor: colors.text,
    borderWidth: 1
  },
  twoPickerItems: {
    height: 100,
    color: colors.text
  }
})
