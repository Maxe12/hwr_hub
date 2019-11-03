import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../view/HomeScreen/HomeScreen';
import MainScreen from '../../view/MainScreen/MainScreen';
import LoadingScreen from '../../view/LoadingScreen/LoadingScreen';

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