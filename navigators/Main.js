import { TabNavigator } from 'react-navigation'

import TrackScreen from '../screens/Track'
import HistoryScreen from '../screens/History'
import AnalysisScreen from '../screens/Analysis'

import { colors } from '../config'

export default TabNavigator({
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
