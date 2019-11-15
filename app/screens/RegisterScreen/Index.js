import React from 'react';
import { Container, Content, Item, Text, Input, View, Label, Button } from 'native-base';

import theme from '../../modules/Theme';
import styles from './Styles';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Registrieren',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: theme.COLOR_MAIN,
        }
    }

    constructor(props) {
        super(props),
            this.state = {
                first: '',
                last: '',
                email: '',
                matrknr: 0,
                pw: '',
                studies: '',
            }
    }

    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>Bite fülle alle Felder aus um dich zu Registrieren</Text>

                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Vorname</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Nachname</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Matrikelnummer</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Was studierst du?</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Passwort</Label>
                            <Input
                                secureTextEntry
                            />
                        </Item>
                        <Button primary style={styles.buttonStyle}>
                            <Text> Registrieren </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default RegisterScreen;