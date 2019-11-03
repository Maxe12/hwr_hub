import React from 'react';
import { ImageBackground, AsyncStorage } from 'react-native';
import { Content, Card, CardItem, Item, Input, Container, Text, Button } from 'native-base';
import styles from './Styles';
import { Asset } from 'expo-asset';
import { connect } from 'react-redux';

const backgroundImg = Asset.fromModule(require('../../../assets/images/HWR_Lichtenberg.jpg'));
const loginVals = { username: 'root', password: 'password' }

class LoginBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                username: '',
                password: ''
            }
        }
    }
    render() {
        return (
            <Container>
                <ImageBackground source={backgroundImg}
                    imageStyle={{ resizeMode: 'stretch' }}
                    style={styles.backgroundImage}>
                    <Content style={styles.loginWindow}>
                        <Card header style={styles.cardStyle}>
                            <CardItem bordered style={styles.cardItemStyle}>
                                <Text style={styles.heading}>Hochschule für Wirtschaft und Recht Berlin</Text>
                            </CardItem>
                            <Item regular>
                                <Input placeholder='Username'
                                    onChangeText={((text) => this.setState({ userdata: {username: text, password: this.state.userdata.password} }))}
                                    value={this.state.userdata.username} />
                            </Item>
                            <Item regular>
                                <Input placeholder='Password'
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ userdata: {username: this.state.userdata.username, password: text} })}
                                    value={this.state.userdata.password} />
                            </Item>
                            <Button block
                                style={{ alignSelf: 'center', backgroundColor: 'red' }}
                                onPress={() => this.loginButtonHandler()}>
                                <Text>Login</Text>
                            </Button>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container >
        );
    }

    loginButtonHandler = async () => {
        console.log(this.state.userdata.username);
        if (this.state.userdata.username == loginVals.username && this.state.userdata.password == loginVals.password) {
            this.addUsername(this.state.userdata.username);
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Main');
        } else {
            alert("Username/Password is wrong");
        }
    }

    addUsername = (username) => {
        this.props.dispatch({ type: 'ADD_USERNAME', username: username });
        this.setState({
            userdata: {
                username: '',
                pasword: ''
            }
        })
    }
}

export default connect()(LoginBody);