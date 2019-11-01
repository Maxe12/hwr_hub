import React from 'react';
import { ActivityIndicator, StatusBar, AsyncStorage, Text, View } from 'react-native';
import styles from './Styles'

export default class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
    }

    /*@todo Loading stuff in here!**/

    render(){
        this._loadData();
        return(
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" style={{size: 20}} />
                <Text>Loading...</Text> 
            </View>
        );
    }

    _loadData = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'Root');
    }
}