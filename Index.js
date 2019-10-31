import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/view/HomeScreen/HomeScreen';
import MainScreen from './app/view/MainScreen/MainScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen, 
        Main: MainScreen
    }, 
    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(RootStack)
export default AppContainer;