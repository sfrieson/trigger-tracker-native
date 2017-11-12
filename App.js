import { StackNavigator } from 'react-navigation'

// import WelcomeScreen from './screens/Welcome';
import Main from './navigators/Main'
import Form from './screens/Form'

const App = StackNavigator({
  Main: {screen: Main},
  Form: {screen: Form}
})

export default App
