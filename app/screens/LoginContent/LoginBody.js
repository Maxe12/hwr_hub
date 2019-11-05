import React from 'react';
import { ImageBackground, AsyncStorage } from 'react-native';
import { CardItem, Item, Input, Container, Text, Button, Body } from 'native-base';
import styles from './Styles';
import { Asset } from 'expo-asset';
import { connect } from 'react-redux';
import { addUsername } from '../../actions/Index';

const backgroundImg = Asset.fromModule(require('../../../assets/images/HWR_Lichtenberg.jpg'));
const loginVals = { username: 'root', password: 'password' }

class LoginBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <Container>
                <ImageBackground source={backgroundImg}
                    imageStyle={{ resizeMode: 'stretch' }}
                    style={styles.backgroundImage}>
                    <CardItem header bordered style={styles.cardItemHeader}>
                        <Text style={styles.textHeader}>Hochschule für Wirtschaft und Recht</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItemBody}>
                        <Body>
                            <Text>Bitte einloggen: </Text>
                            <Item regular style={styles.inputItems}>
                                <Input placeholder='Username'
                                    onChangeText={(text) => { this.setState({ username: text }) }}
                                    value={this.state.username} />
                            </Item>
                            <Item regular style={styles.inputItems}>
                                <Input
                                    placeholder='Passwort'
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ password: text })}
                                    value={this.state.password} />
                            </Item>
                            <Item style={styles.buttonItem}>
                                <Button block style={styles.buttonComponent}
                                    onPress={() => {this.loginButtonHandler()}} >
                                    <Text>Login</Text>
                                </Button>
                            </Item>
                        </Body>
                    </CardItem>
                </ImageBackground>
            </Container >
        );
    }

    loginButtonHandler = async () => {
        if (this.state.username == loginVals.username && this.state.password == loginVals.password) {
            this.addUsername(this.state.username);
            await AsyncStorage.setItem('isLoggedIn', '1');
            await AsyncStorage.setItem('username', this.state.username);
            this.props.navigation.navigate('Main');
        } else {
            alert("Username/Password is wrong");
        }
    }

    addUsername = (username) => {
        this.props.onLogin(username)
        this.setState({
            username: '',
            password: ''
        })
    }
}

mapDispatchToProps = dispatch => ({
    onLogin: (username) => {
        dispatch(addUsername(username));
    }
})

export default connect(null, mapDispatchToProps)(LoginBody);