import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

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
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>History</Text>
          <Text>{!this.state.items ? 'Loading' : this.state.items.length + ' items'}</Text>
        </View>
        {this.state.items && this.state.items.map((item, i) => <Item key={i} {...item} />)}
      </ScrollView>
    )
  }
}

const source = {
  report: require('../../assets/icon-report.png'),
  record: require('../../assets/icon-record.png')
}

function Item (props) {
  const type = props.__typename.toLowerCase()
  return (
    <View style={styles.item}>
      <Image source={source[type]} style={[styles.itemIcon, {tintColor: colors[type]}]} />
      <Text style={styles.itemText}>{props.food || props.symptom} | {(new Date(props.timestamp)).toLocaleString()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
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
  },
  header: {
    borderBottomColor: colors.text,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  item: {
    alignItems: 'center',
    borderBottomColor: colors.text,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5
  },
  itemIcon: {
    // flex: 1,
    height: 30,
    margin: 5,
    width: 30
  },
  itemText: {
    // flex: 1
  }
})
