import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import LoadingResult from './src/screens/LoadingResult';
import TestScreen from './src/screens/TestScreen';
import ConfirmPrediction from './src/screens/ConfirmPrediction';
import FeedbackScreen from './src/screens/FeedbackScreen';
import SuccessfulRecognition from './src/screens/SuccessfulRecognition';

const navigator = createStackNavigator(
  { //1
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' }
    },//2
    Camera :{
      screen: CameraScreen,
      navigationOptions: { headerTitle: 'Camera' }
    },//3
    Loading: {
      screen: LoadingResult,
      navigationOptions: { headerTitle: 'Loading' }
    },//4
    Test: {
      screen: TestScreen,
      navigationOptions: { headerTitle: 'Test' }
    },//5
    Confirm: {
      screen: ConfirmPrediction,
      navigationOptions: { headerTitle: 'Confirm' }
    },//6
    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: { headerTitle: 'Feedback' }
    },//7
    Successful: {
      screen: SuccessfulRecognition,
      navigationOptions: { headerTitle: 'Successful' }
    },
  },

  {
  initialRouteName: 'Home',
  headerMode: 'float',

  navigationOptions: ({ navigation }) => ({
    title: '', //no title to be shown on top
    // title: `${navigation.state.params.name}`, //screen name to be shown on top
  }),

})

export default createAppContainer(navigator);