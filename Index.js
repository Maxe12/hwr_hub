import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/view/HomeScreen/HomeScreen';
import MainScreen from './app/view/MainScreen/MainScreen';
import LoadingScreen from './app/view/LoadingScreen/LoadingScreen';

const RootStack = createStackNavigator(
    {
        Main: MainScreen
    }, 
)

const AuthStack = createStackNavigator({Home: HomeScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: LoadingScreen, 
        Root: RootStack, 
        Auth: AuthStack
    }, 
    {
        initialRouteName: 'AuthLoading'
    }
))