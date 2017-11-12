import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import TrackScreen from '../screens/Track'
import HistoryScreen from '../screens/History'
import AnalysisScreen from '../screens/Analysis'

import { colors } from '../config'

const MainNavigator = TabNavigator({
  History: {screen: HistoryScreen},
  Track: {screen: TrackScreen},
  Analysis: {screen: AnalysisScreen}
}, {
  animationEnabled: true,
  initialRouteName: 'Track',
  tabBarOptions: {
    activeTintColor: colors.activeTab
  },
  tabBarPosition: 'bottom'
})

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
        <MainNavigator navigation={this.props.navigation} />
      </View>
    )
  }
}

Main.router = MainNavigator.router

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
