import React from 'react';
import { ImageBackground, AsyncStorage } from 'react-native';
import { Content, Card, CardItem, Item, Input, Container, Text, Button } from 'native-base';
import styles from './Styles';

const loginVals = {username: 'root', password: 'password'}

export default class LoginBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '', 
            password: ''
        }
    }
    render() {
        return (
            <Container>
                <ImageBackground source={require('../../assets/images/HWR_Lichtenberg.jpg')}
                    imageStyle={{ resizeMode: 'stretch' }}
                    style={styles.backgroundImage}>
                    <Content style={styles.loginWindow}>
                        <Card header style={styles.cardStyle}>
                            <CardItem bordered style={styles.cardItemStyle}>
                                <Text style={styles.heading}>Hochschule für Wirtschaft und Recht Berlin</Text>
                            </CardItem>
                            <Item regular>
                                <Input placeholder='Username' 
                                onChangeText={((username)=>this.setState({username}))} 
                                value={this.state.username} />
                            </Item>
                            <Item regular>
                                <Input placeholder='Password'  
                                secureTextEntry
                                onChangeText={(password) => this.setState({password})} 
                                value={this.state.password} />
                            </Item>
                            <Button block 
                            style={{alignSelf: 'center', backgroundColor: 'red'}}
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
        if(this.state.username === loginVals.username && this.state.password === loginVals.password){
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Main');
        } else {
            alert("Username/Password is wrong"); 
        }
    }
}