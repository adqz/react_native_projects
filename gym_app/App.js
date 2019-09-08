import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import HIIT from './src/screens/HIIT';
import HIIT2 from './src/screens/HIIIT2';
import HIIT3 from './src/screens/HIIT3';

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' }
    },//2
    HIIT: {
      screen: HIIT3,
      navigationOptions: { headerTitle: 'Home' }
    },//2
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: ''
    }
  }
);

export default createAppContainer(navigator);
