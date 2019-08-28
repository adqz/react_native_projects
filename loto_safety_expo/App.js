import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import CameraScreen_trial from './src/screens/CameraScreen_trial';

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Camera: CameraScreen,
  Camera_trial: CameraScreen_trial,
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }

})

export default createAppContainer(navigator);