import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen_legacy';
import CameraScreen_trial from './src/screens/CameraScreen';
import LoadingResult from './src/screens/LoadingResult';
import PickFromGallery from './src/screens/PickFromGallery';
import MainCard from './src/components/MainCard';

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Camera: CameraScreen,
  Camera_trial: CameraScreen_trial,
  Loading: LoadingResult,
  Gallery: PickFromGallery,
  Main: MainCard,
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }

})

export default createAppContainer(navigator);