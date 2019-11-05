import React from './node_modules/react';
import { AsyncStorage } from 'react-native';
import { Container, Text, Button } from 'native-base';
import Header1 from '../../components/Header/CustomHeader';
import Greeting from '../../components/Greeting';
import styles from './Style';

class MainScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header1 />
                <Container style={styles.container}>
                    <Greeting />
                </Container>
                <Button style={styles.button} onPress={() => this._logout()}>
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

export default MainScreen;