import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import * as Screens from '../screens'
const AppStack = createStackNavigator(
  {
    _dashboard: Screens.Dashboard,
  },
  {
    initialRouteName: '_dashboard',
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
)
const AuthStack = createStackNavigator(
  {
    _login: Screens.Login,
    _register: Screens.Register,
  },
  {
    initialRouteName: '_login',
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
)
export default (Routes = createSwitchNavigator(
  {
    _splash: Screens.Splash,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: '_splash'
  }
))
