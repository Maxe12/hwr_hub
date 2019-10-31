import React from 'react';
import { ImageBackground } from 'react-native';
import { Content, Card, CardItem, Item, Input, Container, Text, Button } from 'native-base';
import styles from './Styles';

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
                                <Input placeholder='Username' onChange={text => {this.setState({username: text})}} />
                            </Item>
                            <Item regular>
                                <Input placeholder='Password' onChange={text => {this.setState({password: text})}} />
                            </Item>
                            <Button block 
                            style={{alignSelf: 'center', backgroundColor: 'red'}}
                            onPress={() => this.loginButtonHandler(this.state.username, this.state.password)}>
                                <Text>Login</Text>
                            </Button>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container >
        );
    }

    loginButtonHandler = (username, password) => {
        console.log("Username: " + username);
        if(username === 'root' && password === 'root'){
            this.props.navigation.navigate('Main');
        } else {
            alert("Alert", {text: "Wrong Username/Password"}, "Ok");
        }
    }
}