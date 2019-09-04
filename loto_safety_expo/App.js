import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import LoadingResult from './src/screens/LoadingResult';
import TestScreen from './src/screens/TestScreen';
import ConfirmPrediction from './src/screens/ConfirmPrediction';

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' }
    },
    Camera :{
      screen: CameraScreen,
      navigationOptions: { headerTitle: 'Camera' }
    },
    Loading: {
      screen: LoadingResult,
      navigationOptions: { headerTitle: 'Loading' }
    },
    Test: {
      screen: TestScreen,
      navigationOptions: { headerTitle: 'Test' }
    },
    Confirm: {
      screen: ConfirmPrediction,
      navigationOptions: { headerTitle: 'Confirm' }
    },
  },

  {
  initialRouteName: 'Home',
  headerMode: 'float',
  // defaultNavigationOptions: {
  //   title: 'Home'
  // }
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  }),

})

export default createAppContainer(navigator);