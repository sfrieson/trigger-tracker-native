import React from 'react'
import { Button, View } from 'react-native'

import Input from '../../components/Input'

export default class Form extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.type} Form`
  })

  constructor (props) {
    super(props)
    const fields = forms[props.navigation.state.params.type].fields
    this.state = {
      focused: fields[0].name,
      form: fields.reduce(function (form, field) {
        form[field.name] = ''
        return form
      }, {})
    }

    this.sendData = this.sendData.bind(this)
  }
  render () {
    const { type } = this.props.navigation.state.params
    const fields = forms[type].fields
    return (
      <View>
        {fields.map((field, i) => (
          <Input
            {...field}
            autoFocus={i === 0}
            blurOnSubmit
            focus={this.state.focused === field.name}
            key={field.name}
            onChange={(name, value) => this.updateForm(name, value, fields[i + 1])}
            returnKeyType={i === fields.length - 1 ? 'send' : 'next'}
            defaultValue={this.state.form[field.name]}
          />
        ))}
        <Button title='Send' onPress={this.sendData} />
      </View>
    )
  }

  updateForm (fieldName, value, nextField) {
    console.log(`Set ${fieldName} to ${value} (${typeof value}). Then autofocus ${nextField ? nextField.name : 'nothing'}.`)

    this.setState({
      form: {
        ...this.state.form,
        [fieldName]: value
      }
    }, () => this.changeFocus(nextField))
  }

  changeFocus (field) {
    if (field) this.setState({focused: field.name})
  }

  sendData () {
    console.log('Sending:', this.state.form)
    this.props.navigation.navigate('Main')
  }
}
const forms = {
  Record: {
    fields: [
      {
        name: 'food',
        label: 'Food',
        type: 'text'
      },
      {
        name: 'foodGroup',
        label: 'Food Group',
        type: 'dropdown',
        items: [
          {label: 'Dairy', value: 'dairy'},
          {label: 'Meat', value: 'meat'},
          {label: 'Fish', value: 'fish'},
          {label: 'Sweets & Fats', value: 'fats'},
          {label: 'Grains', value: 'grains'},
          {label: 'Vegetables', value: 'vegetables'}
        ]
      },
      {
        name: 'homemade',
        label: 'Homemade',
        type: 'dropdown',
        items: [
          {label: 'Yes', value: true},
          {label: 'No', value: false}
        ]
      },
      {
        name: 'solid',
        label: 'Type',
        type: 'dropdown',
        items: [
          {label: 'Solid', value: true},
          {label: 'Liquid', value: false}
        ]
      },
      {
        name: 'attributes',
        label: 'attributes',
        type: 'tags'
      }
    ]
  },
  Report: {
    fields: [
      {
        name: 'symptom',
        label: 'Symptom',
        type: 'text'
      },
      {
        name: 'attributes',
        label: 'attributes',
        type: 'tags'
      }
    ]
  }
}
