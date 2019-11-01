import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Text, Button } from 'native-base';
import Header1 from '../../components/Header/CustomHeader';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header1 />
                <Container style={{justifyContent: 'center'}}>
                    <Text style={{ alignSelf: 'center' }}>Succesfully logged in!</Text>
                </Container>
                <Button style={{backgroundColor: 'red', alignSelf: 'center'}} onPress={() => this._logout()}>
                    <Text>Logout</Text>
                </Button>
            </Container>
        );
    }

    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

}