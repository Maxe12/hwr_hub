import React from 'react';
import { ActivityIndicator, StatusBar, AsyncStorage, Text, View } from 'react-native';
import styles from './Styles'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this._loadData();
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" style={{ size: 20 }} />
                <Text>Loading...</Text>
            </View>
        );
    }

    _loadData = async () => {
        await Asset.loadAsync([
            require('../../../assets/images/HWR_Lichtenberg.jpg')
        ]);
        await Font.loadAsync({
            Roboto: require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'Root');
    }
}