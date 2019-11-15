import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import MainScreen from '../../screens/MainScreen/MainScreen';
import LoadingScreen from '../../screens/LoadingScreen/LoadingScreen';
import RegisterScreen from '../../screens/RegisterScreen/Index';

const RootStack = createStackNavigator(
    {
        Main: MainScreen
    }, 
);

const AuthStack = createStackNavigator(
    {
        Home: HomeScreen, 
        Register: RegisterScreen
    }
);

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