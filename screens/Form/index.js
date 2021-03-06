import React from 'react'
import { Button, ScrollView } from 'react-native'

import api from '../../api'
import testApi from '../../api/test'
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
    this.sendTestData = this.sendTestData.bind(this)
  }
  render () {
    const { type } = this.props.navigation.state.params
    const fields = forms[type].fields
    return (
      <ScrollView>
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
        <Button title='Test Send' onPress={this.sendTestData} />
        <Button title='Send' onPress={this.sendData} />
      </ScrollView>
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

  sendTestData () {
    const { type } = this.props.navigation.state.params
    console.log('Sending:', this.state.form)
    let res
    if (type === 'Record') res = testApi.makeRecord(this.state.form)
    if (type === 'Report') res = testApi.makeReport(this.state.form)

    res.then(() => this.props.navigation.navigate('Main'))
    .catch(err => console.log(err))
  }
  sendData () {
    const { type } = this.props.navigation.state.params
    console.log('Sending:', this.state.form)
    let res
    if (type === 'Record') res = api.makeRecord(this.state.form)
    if (type === 'Report') res = api.makeReport(this.state.form)

    res.then(() => this.props.navigation.navigate('Main'))
    .catch(err => console.log(err))
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
